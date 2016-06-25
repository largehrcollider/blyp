var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var morgan = require('morgan');
// var auth = require('./routes/auth/auth.js');
var productsRouter = require('./routes/products/products.js');
var transactionsRouter = require('./routes/transactions/transactions.js');
// var authRouter = require('./routes/auth/auth.js');
var loginRouter = require('./routes/loginRouter.js');
var db = require('./db/config.js');
var stripeRouter = require('./routes/stripe/stripe.js');

var multer = require('multer');
var upload = multer({ dest: path.resolve(__dirname, '../uploads') });

var app = express();

// middleware
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// publicly accessible
app.use('/login', loginRouter);
// app.use('/logout', logoutRouter); // token invalidation?

// protected routes
app.use('/api/products', productsRouter);
// app.use('/api/clients', clientsRouter);
app.use('/api/transactions', transactionsRouter);

// for testing only! products should be uploaded to /api/products
app.post('/api/createProduct', upload.single('file'), (req, res) => {
  var filePath = req.file.path // full path of uploaded file
  var buff = req.file.buffer // buffer of entire file
  fs.rename(path.resolve(__dirname, '../' ,filePath), path.resolve(__dirname, '../images', '' + req.body.sku + '.jpg'), (err) => {
    console.log(err);
    res.sendStatus(200);
  });
});

app.get('/images/:sku', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../images', req.params.sku));
});

//stripe
app.use('/stripe', stripeRouter);

// catch all
app.use('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

module.exports = app;
