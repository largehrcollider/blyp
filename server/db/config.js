//import User from './user/user.js';
var User = require('./user/user.js');
//import Transaction from './transaction/transaction.js';
var Transaction = require('./transaction/transaction.js');
//import mongoose from 'mongoose';
var mongoose = require('mongoose');

var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/blyp';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('connecting', function(){
  console.log('connecting');
});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Mongodb connection open');
}); 