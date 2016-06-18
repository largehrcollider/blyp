var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, required: true}, 
  name: {type: String, required: true},
  role: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;