var express = require('express');
var router = express.Router();
const {createUser, loginExistingUser, getPublicData} = require('./firebaseModules/firebaseConfig.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query, req. params)
  res.render('signedOutProfile')

  // //TODO: add logic here
  // if(req.query.method == "signup"){
  //   console.log("creating user")
  //   createUser(0, req.query.email, req.query.password, req.query.username)
  //   // res.render('signedOutProfile')
  //   res.redirect('/profile/' + req.query.username);
  //   // window.location.href = location.protocol + "//" + location.host + "/profile"
    
  // }else if(req.query.method == "signin"){
  //   console.log(req.query.email, req.query.password)
  //   loginExistingUser(req.query.email, req.query.password)
    
  //   res.redirect('/profile/')
  // }else{
  //   res.render('signedOutProfile');
  // }
  
});

router.get('/:username', (req, res)=>{
  const username = req.params.username;
  console.log(username);
  res.render("profile", {username: req.params.username});
})

router.get('/test/:username', (req, res)=>{
  res.render("test", {username: req.params.username})
})

router.post('/pdata/dashboard', async (req, res)=>{ 
  
  getPublicData(req.body.uid, res)
  

})

module.exports = router;