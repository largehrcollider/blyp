var fs = require('fs');
var express = require('express');
var router = express.Router();
var path = require('path');
var jwt = require('jsonwebtoken');
var SECRET = require('../../../keys/secret.js');

router.get(':sku/:jwt', function(req, res) {
  jwt(req.params.jwt, SECRET, (err, decoded) => {
    if (err) {
      console.log('Does not have access to requested image.');
      console.log(err);
      res.sendStatus(403);
    } else {
      res.sendFile(path.resolve(__dirname, `../../../images/${req.user.business}`, req.params.sku + '.jpg'));
    }
  });
});

module.exports = router;
