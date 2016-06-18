var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true}, 
  name: String,
  role: String
});

exports.User = mongoose.model('User', userSchema);