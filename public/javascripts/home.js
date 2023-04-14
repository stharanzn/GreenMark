import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import {getDatabase, ref, set, child, get, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { setPage } from "./loggedProfile/loggedProfile.js";

const firebaseConfig = {
    apiKey: "AIzaSyDuBvT4uGR5ID65M3WF-hYRz7wtMjEvz-0",
    authDomain: "balmy-cab-379807.firebaseapp.com",
    databaseURL: "https://balmy-cab-379807-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "balmy-cab-379807",
    storageBucket: "balmy-cab-379807.appspot.com",
    messagingSenderId: "210758699381",
    appId: "1:210758699381:web:fb6d4ddecae18493af2b3c",
    measurementId: "G-CSERM56TVL"
  };
  
  
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)

// checkLoggedIn();

function checkLoggedIn(){
    if(localStorage.getItem("loggedIn") == "true"){
        console.log("logged in ")
        assignUsername(localStorage.getItem("_userName"));
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

function assignUsername(_name,_uid){
    console.log("ok its here")
    // const usernames = document.getElementsByClassName("username");
    // for(let i = 0; i<usernames.length; i++){
    //     usernames[i].innerHTML = _name
    // }
    // document.getElementById("username").innerHTML = _name;
    if(window.location.href == window.location.protocol + "//" +window.location.host + "/profile/" + _name){                    
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

