// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// const { getAnalytics } = require("firebase/analytics");
const {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword } = require('firebase/auth');
const {getDatabase, ref, set, child, get, onValue} = require("firebase/database");
// const {popupToast} = require('../../public/javascripts/common.js')

function getHashedPass(_pass){
    return `${_pass}123"`;
}


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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getDatabase(app);
// const analytics = getAnalytics(app);
const gProvider = new GoogleAuthProvider();

function createUser(method = 0, email = null, password = null, username=null){
    switch(method){
        case 0:
            var hashedPass = getHashedPass(password)
            console.log(hashedPass)
            createUserWithEmailAndPassword(auth, email, hashedPass).then((userCred)=>{
                const user = userCred.user;
                // user.updateProfile({
                //     displayName: username                    
                // }).then(()=>{
                //     console.log("profile created successfully");
                // }).catch((error)=>{
                //     console.log("error");
                // })
                // console.log(user)
                addUserToDatabase(0, user, email)
                // popupToast(`Account created successfully...`)
                loginExistingUser(email, password, false)
                //TODO: add username to the below field
                // redirectToDownload();
                
                
                console.log("Logged in using Google successfully...");
            }).catch((err)=>{
                console.log(err)
                console.log('here error')                
                // popupToast("Some error occured, please try again later.", "alert")
            })
            break;
        case 1:
            loginExistingUser(email, password)            
            break;
        case 2:
            signInWithPopup(auth, gProvider).then((result)=>{
                const cred = GoogleAuthProvider.credentialFromResult(result);
                const token = cred.accessToken;
                const user = result.user;            
                // addUserToDatabase(1, user);
                //TODO: send some confirmation back.
                if(window !== undefined){
                  console.log("ok")
                  window.location.href='meet-yeet://'+ result._tokenResponse.oauthIdToken;
                  console.log("meet-yeet://" + result._tokenResponse.oauthIdToken)
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
            break;
        default:
            console.log("ok")
    }
}


function loginExistingUser(email = null, password = null, showToast = true){
    console.log(email, password, "here")
    var _password = getHashedPass(password)
    console.log(_password)
    signInWithEmailAndPassword(auth, email, _password).then((userCred)=>{
        const user = userCred.user;
        // console.log(user)
        
        if(showToast){
            // popupToast(`User logged in sucessfully...`);
            console.log("user logged in success")
        }
        
        console.log("dont know bro")
        // setTimeout(redirectToDownload(), 2000)
        
    }).catch((err)=>{
        // popupToast("❌ Invalid credentials ❌ " + err.message)
        console.log("Invalid credentials")
    })
}

// function popupToast(_message, _status = "info"){
//     let popup = `
//         <div class="toast ${_status}">${_message}.</div>
//         `
//         let toasterDiv = document.getElementById('toaster')
//         toasterDiv.style.transition = "1s all ease !important"
//         toasterDiv.innerHTML = popup;
//     setTimeout(() => {
//         const elem = document.getElementById('toaster');
//         elem.innerHTML = "";
//     }, 4000);
    
// }

function addUserToDatabase(method=0, _user = null, _email=null){
    
    // const user = auth.currentUser;
    const db = getDatabase();
    console.log("adding user data to datbase.")
    
    if(method == 0){
        console.log("in method 0")
        // const _user = auth.currentUser;
        if(_user!= null){
            console.log("user not null")
                                    
            set(ref(db, 'users/' + _user.uid + "/accData"), {
                username: _user.displayName,
                email: _user.email,
                profile_picture : "urlToProfilePic",
                auth_type : "authenticated",
                auth_method : "emailPass",                
            });

            // addPublicData(db, _user, userName);
            
            
        }else{
            console.log("user null")
            // popupToast("Cannot add user to the database", "alert")
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
            // popupToast("Cannot add user to the database", "alert")
        }
    }else{
        // popupToast("Please contact the developers if you see this.", "warnign")
    }
    
    
}

async function getPublicData(_uid, res){
    console.log("getting user data");

    const db = getDatabase();
    const dbref = ref(db);
    get(child(dbref, 'public/' + _uid + "/data")).then((snapshot)=>{
        if(snapshot.exists()){
            console.log(snapshot.val().handle);            
            const pData = {"handle": snapshot.val().handle,
                "carbonCredits": snapshot.val().carbonCredits,
                "carbonOffsetted": snapshot.val().carbonOffsetted,
                "rank": snapshot.val().rank
            }
            res.json(pData)

            // return snapshot.val().username;
            // redirect(u)
        }else{
            console.log("no data available")     
            res.status(400).json({"success": "false",
            "message":"uid not available"});  
        }
    }).catch((error)=>{
        console.log(error)
    })

}

module.exports={createUser, loginExistingUser, getPublicData}