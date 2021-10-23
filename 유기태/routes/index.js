//index.js...

var express = require('express');
var router = express.Router();
const mongoose=require('mongoose');
const User = require('../model/users');

router.get('/',function(req,res){
    res.render('main');
});

router.get('/users', function(req, res, next) {
    res.render('signup');
  });

router.post('/',function(req,res,next){
      var id=req.body.ID;
      var Pw=req.body.Password;

      User.findOne({'ID':id},function(err,user){
        if(err){
          console.log(err);
        }
        if(user.Password==Pw){
          res.redirect('/ingame');
        }
        else{
          /*aler*/
          res.send("로그인 실패");
        }
      })    
});
  
  
  

module.exports = router;
