var jwtParser = require('express-jwt');
var User = require('../db/user/userController.js');
var jwt = require('jsonwebtoken');
var SECRET = require('../../keys/secret.js');
var router = require('express').Router();

module.exports = router.post('/', (req, res) => {
  var name = req.body.name;
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;

  //Check if user exists
  User.getUserByUsername(username, (err, user) => {
    if(user){
      res.status(409).send('User already exists!');
    } else {
      var newUser = {name: name, username: username, email: email, password: password};
      User.createUser(newUser, (err, user) => {
        if(user){
          var token = jwt.sign({
          businesses: {},
          email,
          name,
          username,
          }, SECRET);
          res.status(201).json({user, jwt: token});
        }
      }
    }
  }
  /**
  * use info above to insert user in DB
  */

  // if does not exist, create user and send back token below
  // else, send back 403

  // if insertion succesful:
  // var token = jwt.sign({
  //   businesses: {},
  //   email,
  //   name,
  //   username,
  // }, SECRET);
  // res.json({businesses: {}, email, jwt: token, name, username});

  // if insertion not succesful:
  // res.sendStatus(403);
});
