var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  created_at: {type: Date, required: true, default: Date.now }, 
  username: {type: String, required: true, unique: true}, 
  name: String,
  role: String
});

module.exports = mongoose.model('User', userSchema);