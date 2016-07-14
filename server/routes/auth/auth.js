var jwtParser = require('express-jwt');
var jwt = require('jsonwebtoken');
var SECRET = require('./secret.js');
var router = require('express').Router();



module.exports = router.use(jwtParser({secret: SECRET}), protectedRoute, (err, req, res, next) => {
  res.sendStatus(403);
});
