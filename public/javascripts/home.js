import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import {getDatabase, ref, set, child, get, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { setPage } from "./loggedProfile/loggedProfile.js";

const firebaseConfig = {
    apiKey: process.env.API_KEY_FIREBASE,
    authDomain: process.env.AUTH_DOMAIN_FIREBASE,
    databaseURL: process.env.DATABASE_URL_FIREBASE,
    projectId: process.env.PROJECT_ID_FIREBASE,
    storageBucket: process.env.STORAGE_BUCKET_FIREBASE,
    messagingSenderId: process.env.MESSAGING_SENDER_ID_FIREBASE,
    appId: process.env.APP_ID_FIREBASE,
    measurementId: process.env.MEASUREMENT_ID_FIREBASE,
  };


  
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)

checkLoggedIn();

function checkLoggedIn(){
    if(localStorage.getItem("loggedIn") == "true"){
        console.log("logged in ")
        // assignUsername(localStorage.getItem("_userName"));
    }else{
        
    }
}

onAuthStateChanged(auth, (user)=>{
    console.log("auth state changed")    
    if(user){
        const db = getDatabase();
        const dbref = ref(db);
        get(child(dbref, 'users/' + user.uid + "/accData")).then((snapshot)=>{
            if(snapshot.exists()){
                
                console.log(snapshot.val().username); 
                localStorage.setItem("loggedIn", "true")
                localStorage.setItem("_userName", snapshot.val().username)
                // document.getElementById('btnSignout').style.display = "none";
                
                assignUsername(snapshot.val().username, user.uid);
            }else{
                console.log("no data available")                    
            }
        }).catch((error)=>{
            console.log(error)
        })
    }else{
        // document.getElementById("btnSignout").style.display = "none"
        console.log("no user found")
    }
})

document.getElementById("signoutBtn").addEventListener('click', signoutUser)

function signoutUser(){
    auth.signOut().then(function(){
        // popupToast(localStorage.getItem("_userName")+ " Signed out successfully...")
        localStorage.removeItem("_userName")
        localStorage.setItem("loggedIn", "false")
        window.location.href = window.location.protocol + "//" + window.location.host + "/profile";
        // document.getElementById('btnSignout').style.display = "none";
        // setTimeout(location.reload(), 5000);
    }, function(error){
        console.log('signout error ', error)
        location.reload();
    })
}

function assignUsername(_name,_uid){
    console.log("ok its here")
    // const usernames = document.getElementsByClassName("username");
    // for(let i = 0; i<usernames.length; i++){
    //     usernames[i].innerHTML = _name
    // }
    // document.getElementById("username").innerHTML = _name;
    if((window.location.href == window.location.protocol + "//" +window.location.host + "/profile") && localStorage.getItem("loggedIn")){    

        // setTimeout(window.location.href = window.location.protocol + "//" + window.location.host + "/profile/" + _name, 5000)
        // document.getElementById("registerFragment").style.display = "none"
        // document.getElementById("btnSignout").style.display = "block"
    }
    else if(window.location.href == window.location.protocol + "//" +window.location.host + "/profile/" + _name){                    
        setPage(_uid);
        // document.getElementById("registerFragment").style.display = "none"
        // document.getElementById("btnSignout").style.display = "block"
    }else if(window.location.href == window.location.protocol + "//" + window.location.host + "/"){
        // document.getElementById("toProfile").innerHTML = "View Profile"
    }
    else{
        
        console.log(window.location.href)
    }
}

