var express = require('express');
var router = express.Router();
var User = require('../../db/user/userController.js');
var jwt = require('jsonwebtoken');
var jwtParser = require('express-jwt');
var SECRET = require('../../../keys/secret.js');

router.get('/', function(req, res){
  User.getUserByUsername(req.user.username, function(err, user){
    if(err){
      console.log('There was an error getting the user!');
      console.log(err);
      res.sendStatus(500);
    } else if(!user){
      console.log('The user could not be found!');
      res.sendStatus(500);
    } else {
      delete user.password;
      delete user.salt;
      res.status(200).json(user);
    }
  });
});

router.get('/requests', function(req, res){
  User.getUserByUsername(req.user.username, function(err, user){
    if(err){
      console.log('There was an error getting the user!');
      console.log(err);
      res.sendStatus(500);
    } else if(!user){
      console.log('The user could not be found!');
      res.sendStatus(500);
    } else {
      res.status(200).send(user.requests);
    }
  });
});

router.put('/', function(req, res){
  User.updateByUsername(req.user.username, req.body, function(err, user){
    if(err){
      console.log('There was an error updating the user!');
      console.log(err);
      res.sendStatus(500);
    }else if(!user){
      console.log('There was an error finding the user!');
      res.sendStatus(500);
    }else{
      console.log(user)
      var token = jwt.sign({
        username: user.username,
        business: req.user.business ? req.user.business : '',
        email: user.email,
        name: user.name
      }, SECRET);
      var sendObj = {};
      sendObj.token = token;
      sendObj.username = user.username;
      sendObj.email = user.email;
      sendObj.name = user.name;
      res.status(200).json(sendObj);
    }
  });
});

// router.put('/', function(req, res){
//   User.updateUserByUsername(req.user.username, )
// });

router.delete('/', function(req, res){
  User.deleteUserById(req.user.username, function(err, user){
    if(err){
      console.log('There was an error deleting the user!');
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(user);
    }
  });
});

module.exports = router;
