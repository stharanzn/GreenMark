// import { loadScript } from "@paypal/paypal-js";
const {loadScript} = require("@paypal/paypal-js")
require('dotenv').config();


function connect(){
    loadScript({"client-id": process.env._PAYPAL_CLIENT_ID, currency : "INR"})
    .then((paypal)=>{
        console.log("use paypal sdk")
    }).catch((err)=>{
        console.log(err)
    })

}

module.exports={connect}

