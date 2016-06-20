var express = require('express');
var router = express.Router();
var User = require('../db/user/userController.js');

router.get('/', function(req, res){
  
});

router.post('/', function(req, res){

});

router.put('/', function(req, res){

});

router.delete('/:id', function(req, res){
  User.deleteUserById(req.params.id, function(err, user){
    if(err){
      res.writeHead(500);
    } else {
      res.writeHead(200).send(user);
    }
  });
});