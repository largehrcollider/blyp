var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true}, 
  name: String,
  role: String
});

module.exports = mongoose.model('User', userSchema);