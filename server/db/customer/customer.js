var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
  created_at: {type: Date, required: true, default: Date.now}, 
  name: String,
  address: String,
  phone: String
});

module.exports= mongoose.model('Customer', customerSchema);