var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var morgan = require('morgan');
var auth = require('./routes/auth/auth.js');
var products = require('./routes/products/products.js');

var app = express();

// middleware
app.use('/', express.static(path.resolve(__dirname, '../build')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routers
app.use('/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../build/index.html'))
})
// app.use('/*', function (req, res) {
//   res.redirect('/');
// });

module.exports = app;
