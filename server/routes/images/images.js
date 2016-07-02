var fs = require('fs');
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/:sku', function(req, res) {
  res.sendFile(path.resolve(__dirname, `../../../images/${req.user.business}`, req.params.sku + '.jpg'));
});
