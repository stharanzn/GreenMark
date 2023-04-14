// import { loadScript } from "@paypal/paypal-js";
const {loadScript} = require("@paypal/paypal-js")


function connect(){
    loadScript({"client-id": "ARR5sOY7MLDDa-muXKxNxUwNW7Ws1as4xal1HP3Z5JTlTKn4ayhLG5q25aFsYOWS2UGnLg3FtAlvlb5L", currency : "INR"})
    .then((paypal)=>{
        console.log("use paypal sdk")
    }).catch((err)=>{
        console.log(err)
    })

}

module.exports={connect}

