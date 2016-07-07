var jwtParser = require('express-jwt');
var jwt = require('jsonwebtoken');
var SECRET = require('../../keys/secret.js');
// var SECRET = require('?config.js').get('jwtSecret');
var router = require('express').Router();
var User = require('../db/user/userController.js');

module.exports = router.post('/', (req, res) => {
  if (req.body.jwt) {
    jwt.verify(req.body.jwt, SECRET, (err, decoded) => {
      if (err) {
        console.error('Tried to log in with token, but token was invalid.');
        console.error(err.message);
        res.sendStatus(403);
      } else {
        User.getUserByUsername(decoded.username, (err, user) => {
          if (err) {
            console.error(`Failed to retrieve user ${decoded.username} from database.`);
            console.error(err.message);
            res.sendStatus(500);
          } else {
            var data = {
              jwt: req.body.jwt,
              name: user.name,
              username: user.username,
              email: user.email,
              imgSrc: user.imgSrc,
              businesses: user.businesses
            };
            res.json(data);
          }
        });
      }
    });
  }
  else {
    User.getUserByUsername(req.body.username, (err, user) => {
      if(err){
        console.error('Error retrieving user from db.');
        console.error(err.message);
        res.sendStatus(500);
      } else if(!user){
        console.log(`User ${req.body.username} does not exist in the db.`);
        res.sendStatus(403);
      } else {
        user.comparePasswords(req.body.password)
        .then(function(isMatch){
          if(isMatch){
            var data = {
              jwt: jwt.sign({username: req.body.username}, SECRET),
              name: user.name,
              username: req.body.username,
              email: user.email,
              imgSrc: user.imgSrc,
              businesses: user.businesses
            };
            res.json(data);
          } else {
            console.error(`Incorrect password for ${req.body.username}.`);
            res.sendStatus(403);
          }
        });
      }
    });
  }
});
