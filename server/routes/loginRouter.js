var jwtParser = require('express-jwt');
var jwt = require('jsonwebtoken');
var SECRET = require('../../keys/secret.js');
var router = require('express').Router();
var User = require('../db/user/userController.js');

module.exports = router.post('/', (req, res) => {
/*  Uncomment the lines below if you'd like to disable Auth for development.
  var token = jwt.sign({
    admin: true,
    name: 'Eduard',
    username: 'edu',
  }, SECRET);
  res.json({admin: true, jwt: token, name: 'Eduard', username: 'edu'});*/

//Comment out the block of code below if you'd like to disable Auth for development.
  User.getUserByUsername(req.body.username, (err, user) => {
    if(err){
      res.sendStatus(500);
    } else if(!user){
      res.status(500).send('User does not exist');
    } else {
      user.comparePasswords(req.body.password)
      .then(function(isMatch){
        if(isMatch){
          var data = {};
          data.jwt = jwt.sign({username: req.username}, SECRET);
          data.username = req.body.username;
          res.status(200).json(data);
        } else {
          res.sendStatus(403);
        }
      });
    }
  });
});
