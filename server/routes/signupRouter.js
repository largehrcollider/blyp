var jwtParser = require('express-jwt');
var jwt = require('jsonwebtoken');
var SECRET = require('../../keys/secret.js');
var router = require('express').Router();

module.exports = router.post('/', (req, res) => {
  var name = req.body.name;
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;

  /**
  * use info above to insert user in DB
  */

  // if insertion succesful:
  var token = jwt.sign({
    businesses: {},
    email,
    name,
    username,
  }, SECRET);
  res.json({businesses: {}, email, jwt: token, name, username});

  // if insertion not succesful:
  // res.sendStatus(403);
});
