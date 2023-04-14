import {createNewUser, signoutUser, getUserData, loginExistingUser} from "./firebase.js"
import {getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { popupToast } from "./common.js";

$(document).ready(function () {
    $(".veen .rgstr-btn button").click(function () {
      $(".veen .wrapper").addClass("move");
      $(".body").css("background", "#e0b722");
      $(".veen .login-btn button").removeClass("active");
      $(this).addClass("active");
    });
    $(".veen .login-btn button").click(function () {
      $(".veen .wrapper").removeClass("move");
      $(".body").css("background", "#ff4931");
      $(".veen .rgstr-btn button").removeClass("active");
      $(this).addClass("active");
    });
  });



document.getElementById('createUser').addEventListener('click', callCreateUserUsingEmailPass);

function callCreateUserUsingEmailPass(){
    var email = document.getElementById('createUserEmail').value
    var password = document.getElementById('createUserPass').value
    var rePass = document.getElementById('createUserRePass').value
    var _username = document.getElementById('usernameInp').value

    if(password !== rePass){
        popupToast("Passwords do not match.", "alert")
    }else{
        console.log('creating user')
        createNewUser(0, email, password, _username)
    }

    
}

document.getElementById('loginUser').addEventListener('click', callLoginUser);

function callLoginUser(){
    loginExistingUser(document.getElementById('loginUserEmail').value, document.getElementById('loginUserPass').value)
}



document.getElementById('btnSignout').addEventListener('click', signoutUser);





  