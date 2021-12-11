//ingame.js...
var express = require('express');
var router = express.Router();
const mongoose=require('mongoose');
const User = require('../model/users');
const Post = require('../model/board');



  // Index 
  router.get('/', function(req, res){
    Post.find({})                  // 1
    .sort('-createdAt')            // 1
    .exec(function(err, posts){    // 1
      if(err) return res.json(err);
      res.render('signin/signin', {posts:posts,user:req.query});
    });
  });
  
  // New
  router.get('/new', function(req, res){
    res.render('signin/new');
  });
  
  // create
  router.post('/', function(req, res){
    Post.create(req.body, function(err, post){
      if(err) return res.json(err);
      res.redirect('/ingame');
    });
  });
  
  // show
  router.get('/:id', function(req, res){
    Post.findOne({_id:req.params.id}, function(err, post){
      if(err) return res.json(err);
      res.render('signin/show', {post:post});
    });
  });
  
  /*// edit
  router.get('/:id/edit', function(req, res){
    Post.findOne({_id:req.params.id}, function(err, post){
      if(err) return res.json(err);
      res.render('posts/edit', {post:post});
    });
  });
  */
 /*
  // update
  router.put('/:id', function(req, res){
    req.body.updatedAt = Date.now(); //2
    Post.findOneAndUpdate({_id:req.params.id}, req.body, function(err, post){
      if(err) return res.json(err);
      res.redirect("/posts/"+req.params.id);
    });
  });
  */

  // destroy
  router.delete('/:id', function(req, res){
    Post.deleteOne({_id:req.params.id}, function(err){
      if(err) return res.json(err);
      res.redirect('/ingame');
    });
  });
  


module.exports=router;