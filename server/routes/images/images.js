var fs = require('fs');
var express = require('express');
var router = express.Router();
var path = require('path');
var jwt = require('jsonwebtoken');
var SECRET = require('../../../keys/secret.js');

router.get('/:sku', function(req, res) {
  jwt.verify(req.query.jwt, SECRET, (err, decoded) => {
    if (err) {
      console.log('Does not have access to requested image.');
      console.log(err);
      res.sendStatus(403);
    } else {
      res.sendFile(path.resolve(__dirname, `../../../images/${decoded.business}`, req.params.sku + '.jpg'));
    }
  });
});

module.exports = router;
