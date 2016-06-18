//import mongoose from 'mongoose';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = mongoose.Schema({
  created_at: {type: Date, required: true}, 
  updated_at: {type: Date},
  sku: String,
  price: [{type: String, required: true}],
  inventory: {type: Number, required: true},
  name: String,
  description: [{type: String}]
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;