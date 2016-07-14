var jwtParser = require('express-jwt');
var User = require('../db/user/userController.js');
var jwt = require('jsonwebtoken');
var SECRET = require('../../keys/secret.js');
var router = require('express').Router();
var images = require('./helpers/images.js');


router.post('/', images.multer.single('file'), images.saveProfileImage, (req, res) => {
  var user = req.body;

  // if file was uploaded, append imgSrc to product properties
  if (req.file && req.file.imgSrc) {
    user.imgSrc = req.file.imgSrc;
  }

  var { name, username, email, imgSrc } = user;
  // var name = req.body.name;
  // var username = req.body.username;
  // var email = req.body.email;
  // var password = req.body.password;

  //Check if user exists
  User.getUserByUsername(user.username, (err, result) => {
    if (err) {
      console.error(`Error retrieving user ${user.username} from db.`);
      console.error(err.message);
      res.sendStatus(500);
    }
    if (result) {
      res.status(409).send('User already exists!');
    } else {
      User.createUser(user, (err, result) => {
        if (err) {
          console.error(`Error creating user ${user.username} in db.`);
          console.error(err.message);
          res.sendStatus(500);
        } else {
          var user = {name, username, email, imgSrc};
          var token = jwt.sign({
            businesses: {},
            email,
            name,
            username,
          }, SECRET);
          res.status(201).json({name, username, email, imgSrc, jwt: token});
        }
      });
    }
  });
});

module.exports = router;
