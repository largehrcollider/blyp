var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  created_at: {type: Date, required: true}, 
  updated_at: {type: Date},
  sku: String,
  price: [{type: String, required: true}],
  inventory: {type: Number, required: true},
  name: String,

  //Can contain an arbritray number of details. i.e. Album, Artist etc. 
  //Categories can be here as well
  details: [{type: String}]
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;