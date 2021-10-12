//index.js
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.render('main');
});
router.get('/ingame',function(req,res){
    res.render('/signin');
});
router.get('/new',function(req,res){
    res.render('/signup');
});


module.exports = router;
