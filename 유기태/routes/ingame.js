//ingame.js...
var express = require('express');
var router = express.Router();
const mongoose=require('mongoose');
const User = require('../model/users');

router.get('/',function(req,res){
    res.render('signin');
});

module.exports=router;