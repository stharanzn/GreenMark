const express = require('express');
var router = express.Router();
const paypal = require('paypal-rest-sdk');
const taquito = require('@taquito/taquito');
const { InMemorySigner } = require('@taquito/signer');
const Tezos = require('@taquito/taquito').Tezos;

const PAYPAL_CLIENT_ID = _PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = _PAYPAL_CLIENT_SECRET;


// Configure PayPal SDK
paypal.configure({
  mode: 'sandbox',
  client_id: PAYPAL_CLIENT_ID,
  client_secret: PAYPAL_CLIENT_SECRET,
});

// // Configure Taquito
// const rpc = 'YOUR_RPC_ENDPOINT_HERE';
// const network = 'YOUR_NETWORK_HERE';
// const signer = new InMemorySigner('YOUR_PRIVATE_KEY_HERE');
// Tezos.setProvider({ rpc, signer });

// Define your smart contract code here
const contractCode = `
  // YOUR SMART CONTRACT CODE HERE
`;

// Define an express route to initiate PayPal payment
router.get('/pay2', async (req, res) => {
  const { amount } = req.body;

  const createPaymentJson = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal'
    },
    redirect_urls: {
      return_url: 'https://localhost:4000/pay/pay2/success',
      cancel_url: 'https://localhost:4000/profile/notdone',
    },
    transactions: [{
      amount: {
        total: amount,
        currency: 'USD',
      },
    }]
  };

  paypal.payment.create(createPaymentJson, (error, payment) => {
    if (error) {
      console.error(error);
      return res.status(500).send({ message: 'Error creating payment' });
    } else {
      req.session.paymentId = payment.id;
      const links = payment.links;
      for (let i = 0; i < links.length; i++) {
        if (links[i].rel === 'approval_url') {
          return res.send({ approvalUrl: links[i].href });
        }
      }
    }
  });
});

// Define an express route to execute PayPal payment
router.get('/pay2/success', async (req, res) => {
  const { paymentId, PayerID } = req.query;

  const executePaymentJson = {
    payer_id: PayerID,
    transactions: [{
      amount: {
        currency: 'USD',
        total: amount,
      }
    }]
  };

  paypal.payment.execute(paymentId, executePaymentJson, async (error, payment) => {
    if (error) {
      console.error(error);
      return res.status(500).send({ message: 'Error executing payment' });
    } else {
      // Send the payment data to smart contract
      const contract = await Tezos.contract.originate({
        code: contractCode,
        storage: {
          paymentId: payment.id,
          payerId: PayerID,
          amount: amount,
        }
      }).send();

      console.log(`Smart contract originated at ${contract.address}`);

      // Trigger smart contract function
      const operation = await contract.methods.someFunction().send();

      console.log(`Smart contract function executed. Operation hash: ${operation.hash}`);

      return res.redirect('YOUR_SUCCESS_REDIRECT_URL_HERE');
    }
  });
});

module.exports = router;