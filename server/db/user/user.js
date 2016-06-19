var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  created_at: {type: Date, required: true, default: Date.now}, 
  username: {type: String, required: true, unique: true}, 
  name: String,
  role: String
});

exports.User = mongoose.model('User', userSchema);