var money=document.getElementById("inputmoney")
var label=document.getElementById("amount")
document.querySelector('#inputmoney').addEventListener('keypress',function(e){
    if(e.key==="Enter"){
        document.getElementById('amount').innerHTML = "$" + 4*document.getElementById('inputmoney').value
    }
})