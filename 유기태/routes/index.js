//index.js...

var express = require('express');
var router = express.Router();
const mongoose=require('mongoose');
const User = require('../model/users');

router.get('/',function(req,res){
    res.render('main');
});



router.post('/',function(req,res,next){
  var id=req.body.ID;
  var Pw=req.body.Password;

  User.findOne({'ID':id},function(err,user){
    if(err){
      console.log(err);
    }
    if(user.Password==Pw){
      res.render('signin');
    }
    else{
      /*aler*/
      res.write("<script>alert('패스워드가 틀렸습니다.')</script>");
      res.write("<script>window.location='/'</script>");
      console.log("Pw")
    }
  })    
});
  
  
  

module.exports = router;
