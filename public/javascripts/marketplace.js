
document.getElementById('donateBtn').addEventListener("click", redirectToPayments)

function redirectToPayments(){
    window.location.href = window.location.protocol + "//" + window.location.host + "/payments";
}