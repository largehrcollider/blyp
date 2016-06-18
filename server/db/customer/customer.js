var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
  created_at: {type: Date, required: true, default: Date.now}, 
  name: String,
  address: String,
  phone: String
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;