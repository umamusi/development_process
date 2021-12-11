//index.js...

var express = require('express');
var router = express.Router();
const mongoose=require('mongoose');
const User = require('../model/users');
var url=require('url');

router.get('/',function(req,res){
    res.render('main');
});



router.post('/',function(req,res,next){
  console.log(req.body);
  var id=req.body.ID;
  var Pw=req.body.Password;

  User.findOne({'ID':id},function(err,user){
    if(err){
      console.log(err);
    }
    if(user.Password==Pw){
      res.redirect(url.format({
        pathname:'/ingame',
        query:{
          Name:user.Name
        }
      }))
    }
    else{
      /*alert*/
      res.write("<script>alert('password failed!')</script>");
      res.write("<script>window.location='/'</script>");
      console.log("Pw")
    }
  })    
});
  
  
  

module.exports = router;
