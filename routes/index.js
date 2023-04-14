var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/leaderboard', function(req , res , next){
  res.render('leaderboard');
});
router.get('/marketplace', function(req , res , next){
  res.render('marketplace',{username: req.params.username});
});

module.exports = router;
