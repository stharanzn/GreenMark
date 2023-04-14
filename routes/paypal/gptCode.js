const express = require('express');
const paypal = require('@paypal/checkout-server-sdk');

const app = express();

// Set up PayPal client
const PAYPAL_CLIENT_ID = 'ARR5sOY7MLDDa-muXKxNxUwNW7Ws1as4xal1HP3Z5JTlTKn4ayhLG5q25aFsYOWS2UGnLg3FtAlvlb5L';
const PAYPAL_CLIENT_SECRET = 'EGgQNW0Ak28sV39OkyLG2jhDcmSkhuhSB-F2zZxU7X_hXqUB9jyZ8m6lmekGguAm1vR9WC08nHoOHVdv';

const environment = new paypal.core.SandboxEnvironment(PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET);
const client = new paypal.core.PayPalHttpClient(environment);

// Handle payment request
app.post('/pay', async (req, res) => {
  try {
    // Create PayPal order
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer('return=representation');
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: 'USD',
          value: '10.00'
        }
      }]
    });

    const order = await client.execute(request);

    // Redirect to PayPal for payment
    const links = order.result.links;
    for (let i = 0; i < links.length; i++) {
      if (links[i].rel === 'approve') {
        res.redirect(links[i].href);
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating PayPal order');
  }
});

// Handle payment confirmation
app.get('/pay/confirm', async (req, res) => {
  try {
    // Get PayPal order ID from query parameter
    const orderID = req.query.orderID;

    // Capture PayPal payment
    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    request.requestBody({});
    const capture = await client.execute(request);

    // Trigger smart contract
    // ...

    res.send('Payment confirmed');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error confirming PayPal payment');
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});