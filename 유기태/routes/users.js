//user.js..

var express = require('express');
var router = express.Router();
const User = require('../model/users');
const mongoose=require('mongoose');


router.get('/', function(req, res, next) {
  res.render('signup');
});

//create...(signup)
router.post('/',function(req,res,next){
  console.log(req.body);
  
  var name=req.body.Name;
  var id=req.body.ID;
  var Pw=req.body.Password;

  User.find({'ID':id})
  .exec()
  .then(user=>{
    if(user.length>=1){
      res.write("<script>alert('이미 존재하는 아이디입니다.')</script>");
      res.write("<script>window.location='/'</script>");
    }
    else{
      const user = new User({
        'Name':name,
        'ID':id,
        'Password':Pw
      });
      user
      .save()
      .then(result=>{
        console.log(result);
        res.redirect('/'); /*절대주소*/
      })
      .catch(err=>{
        console.log(err);
      });
    }
  });
});



module.exports = router;
