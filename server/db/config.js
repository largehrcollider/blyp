var mongoose = require('mongoose');
var User = require('./user/user.js');
var Transaction = require('./transaction/transaction.js')
var Users = require('./user/userController.js');

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

module.exports = db;

var test = new User({username: 'ericdasdfsmith'});
test.save(function(err){
  console.log(err);
});

new Transaction({

  //References to items in item collection


  //How was the purchase made, Amex, MasterCard, Cash etc.
  currency: 'Amex',
  purchase_total: 100}).save();

Users.getAllUsers(function(users){
  console.log(users)
});