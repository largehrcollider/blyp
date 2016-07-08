var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var productSchema = mongoose.Schema({
  sku: String,
  business: String,
  price: {type: Number, required: true},
  quantity: {type: Number, required: true},
  name: String,
  categories: Array,
  image: String,
  imgSrc: String,

  //Can contain an arbritray number of details. i.e. Album, Artist etc.
  details: String
},
  { timestamps: true }
);

productSchema.index({sku: 1, business: 1}, {unique: true});
productSchema.plugin(uniqueValidator);
var Product = mongoose.model('Product', productSchema);

module.exports = Product;
