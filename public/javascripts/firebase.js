
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import {getDatabase, ref, set, child, get, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { popupToast } from "./common.js";


const gProvider = new GoogleAuthProvider();

const firebaseConfig = {

  };
  
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);


export function loginExistingUser(email = null, password = null, showToast = true){
    console.log(email, password)
    var _password = getHashedPass(password)
    signInWithEmailAndPassword(auth, email, _password).then((userCred)=>{
        const user = userCred.user;
        console.log(user)
        
        if(showToast){
            popupToast(`User logged in sucessfully...`);
        }
        
        const _u = getUserData();
        console.log(_u)
        // setTimeout(redirect(_u), 1000)
        
    }).catch((err)=>{
        popupToast("❌ Invalid credentials ❌ " + err.message)
    })
}
    
export function createNewUser(method = 0, email=null, password=null, username=null){

    if(method== 0){
        var hashedPass = getHashedPass(password)

        createUserWithEmailAndPassword(auth, email, hashedPass).then((userCred)=>{
            const user = userCred.user;
            // console.log(user)
            addUserToDatabase(0, user, email, username)

            popupToast(`Account created successfully...`)

            // setTimeout(loginExistingUser(email, password, false), 2000);
            //TODO: add username to the below field                   
            
            // document.getElementById('signoutBtn').style.display = "block";
            console.log("Logged in using mail successfully...");
            setTimeout(redirect(username), 3000);
        }).catch((err)=>{
            console.log(err)
            console.log('here error')
            popupToast("Some error occured, please try again later.", "alert")
        })
    }
    else if(method ==1){
        loginUserUsingGoogle()
    }else if(method ==2){
        signInWithPopup(auth, gProvider).then((result)=>{
            const cred = GoogleAuthProvider.credentialFromResult(result);
            const token = cred.accessToken;
            const user = result.user;            
            addUserToDatabase(1, user);
            //TODO: send some confirmation back.
            if(window !== undefined){
              console.log("ok")
            //   window.location.href='meet-yeet://'+ result._tokenResponse.oauthIdToken;
            //   console.log("meet-yeet://" + result._tokenResponse.oauthIdToken)
            }else{
              console.log("nope")
            }
        }).catch((error)=>{
            //TODO: send some error back.
            if(window !== undefined){
                console.log("ok")
                window.location.href='meet-yeet://operationTerminated';
              }else{
                console.log("nope")
              }
        })
      }

    
    
}

function redirect(page){
    if(window !== undefined){
        window.location.href= location.protocol + "//" + location.host + "/profile/" + page
    }else{
        console.log("check again")
    }
    
}

function loginUserUsingGoogle(){
    signInWithPopup(auth, gProvider).then((result)=>{
        const cred = GoogleAuthProvider.credentialFromResult(result);
        const token = cred.accessToken;
        const user = result.user;            
        addUserToDatabase(1, user);
        //TODO: add username to the below field
        console.log("logging user...")
        popupToast(`Account created successfully...`)
        // setTimeout(()=>{
        //     redirectToDownload()
        // }, 5000)
        console.log("ok")
    }).catch((error)=>{
        console.log(error)
        popupToast("Authentication terminated by the user. ", "alert")
    })
}

export function signoutUser(){
    auth.signOut().then(function(){
        popupToast(localStorage.getItem("_userName")+ " Signed out successfully...")
        localStorage.removeItem("_userName")
        localStorage.setItem("loggedIn", "false")
        // document.getElementById('btnSignout').style.display = "none";
        setTimeout(location.reload(), 5000);
    }, function(error){
        console.log('signout error ', error)
        location.reload();
    })
}


//AMAN: TODO: Create a schema to store user data, [public data, posts, dashboard data, biodata]
function addPublicData(db, _user, userName){
    console.log("added public data")

    set(ref(db, 'public/' + _user.uid + "/data"), {        
        carbonCredits: 0,
        handle: userName,
        carbonOffsetted: 0,
        rank: 10000,
        posts:{
            
        },
        
    })

}

function addUserToDatabase(method=0, _user = null, _email=null, userName=null){
    console.log(method, _user.uid, _email, userName)
    // const user = auth.currentUser;
    const db = getDatabase();
    // const userName = "user"+ Math.floor(Math.random()* 1001)
    if(method == 0){
        // const _user = auth.currentUser;
        console.log(userName)
        if(_user!= null){
        // console.log(_user, _user.uid)                                    
            set(ref(db, 'users/' + _user.uid + "/accData"), {
                username: userName,
                email: _user.email,
                profile_picture : "urlToProfilePic",
                auth_type : "authenticated",
                auth_method : "emailPass",                
            });

            addPublicData(db, _user, userName);
            
            
        }else{
            popupToast("Cannot add user to the database", "alert")
        }
    }else if(method == 1){
        if(_user!= null){
            console.log
            set(ref(db, 'users/' + _user.uid + "/accData"),{
                username: userName,
                email: _user.email,
                profile_picture: "urlToProfile",
                auth_type: "authenticated",
                auth_method: "google"
            })
            
            addPublicData(db, _user, userName);
            
        }else{
            popupToast("Cannot add user to the database", "alert")
        }
    }else{
        popupToast("Please contact the developers if you see this.", "warnign")
    }
    
    
}

export async function getUserData(){
    
    onAuthStateChanged(auth, (user)=>{
        if(user){
            const db = getDatabase();
            const dbref = ref(db);
            get(child(dbref, 'users/' + user.uid + "/accData")).then((snapshot)=>{
                if(snapshot.exists()){
                    console.log(snapshot.val().username);
                    const u = snapshot.val().username                    
                    // return snapshot.val().username;
                    redirect(u)
                }else{
                    console.log("no data available")                    
                }
            }).catch((error)=>{
                console.log(error)
            })
        }
    })
}


function getHashedPass(_pass){

    return `${_pass}123"`;
}




