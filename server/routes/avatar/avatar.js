var express = require('express');
var router = express.Router();
var User = require('../../db/user/userController.js');

router.get('/:username', (req, res) => {
  User.getUserByUsername(req.params.username, (err, user) => {
    if (err) {
      console.error(`Error retrieving user ${req.params.username}`);
      console.error(err.message);
      res.sendStatus(500);
    } else if (!user) {
      console.error(`User ${req.params.username} not found`);
      res.sendStatus(404);
    } else {
      res.redirect(user.imgSrc);
    }
  });
});

module.exports = router;
