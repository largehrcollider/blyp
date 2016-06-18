var mongoose = require('mongoose');
var User = require('./user/user.js');

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

var test = new User({username: 'testing'});
test.save(function(err){
  console.log(err);
});