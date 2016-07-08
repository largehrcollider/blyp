var fs = require('fs');
var express = require('express');
var router = express.Router();
var path = require('path');
var jwt = require('jsonwebtoken');

router.get('/:filename', function(req, res) {
  res.sendFile(path.resolve(__dirname, `../../../images/${req.params.filename}`));
});

module.exports = router;
