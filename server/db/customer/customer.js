var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
  name: String,
  address: String,
  phone: String
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;