var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  sku: String,
  price: {type: Number, required: true},
  inventory: {type: Number, required: true},
  name: String,
  categories: Array,

  //Can contain an arbritray number of details. i.e. Album, Artist etc. 
  details: Array
},
{
  timestamps: true
}
);

var Product = mongoose.model('Product', productSchema);

module.exports = Product;