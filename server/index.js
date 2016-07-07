var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var morgan = require('morgan');
// var auth = require('./routes/auth/auth.js');
var profileRouter = require('./routes/profile/profile.js');
var productsRouter = require('./routes/products/products.js');
var transactionsRouter = require('./routes/transactions/transactions.js');
var employmentRouter = require('./routes/employment/employment.js');
var businessesRouter = require('./routes/businesses/businesses.js');
var avatarRouter = require('./routes/avatar/avatar.js');
var imageRouter = require('./routes/images/images.js');
// var authRouter = require('./routes/auth/auth.js');
var loginRouter = require('./routes/loginRouter.js');
var signupRouter = require('./routes/signupRouter.js');
var db = require('./db/config.js');
var stripeRouter = require('./routes/stripe/stripe.js');
var jwtParser = require('express-jwt');
var config = require('./config.js');

var SECRET = config.get('jwtSecret');

var app = express();

/**
* Temporary directory where images will be stored.
* Should later be changed to make directories on a per-company basis.
* Note: mkdirSync will throw error if directory already exists, so better to use
* fs.mkdir, which is async, in the corresponding route handler.
*/
// fs.mkdirSync(path.resolve(__dirname, '../images'));
var errHandler = function(err, req, res, next){
  console.error('Insufficient privilages');
  console.error(err);
  res.sendStatus(403);
}

// middleware
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// publicly accessible
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
// app.use('/logout', logoutRouter); // token invalidation?

// protected routes
app.use('/api/products', jwtParser({secret: SECRET}), productsRouter, errHandler);
app.use('/api/profile', jwtParser({secret: SECRET}), profileRouter, errHandler);
// app.use('/api/clients', clientsRouter);
app.use('/api/transactions', jwtParser({secret: SECRET}), transactionsRouter);
app.use('/api/employment', employmentRouter);
app.use('/api/business', jwtParser({secret: SECRET}), businessesRouter, errHandler);
// app.get('/api/images/', jwtParser({secret: SECRET}), imageRouter, errHandler);
app.use('/api/avatar', avatarRouter);
app.use('/api/images/', imageRouter); // image server for NODE_ENV=development

//stripe
app.use('/stripe', stripeRouter);

// catch all
app.use('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

module.exports = app;
