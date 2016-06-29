var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  created_at: {type: Date, required: true, default: Date.now},
  //business_id: String, 
  username: {type: String, required: true, unique: true}, 
  name: String,
  requests: Array,
  businesses: Array,
  role: String
});

module.exports = mongoose.model('User', userSchema);