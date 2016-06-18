//import mongoose from 'mongoose';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = mongoose.Schema({
  created_at: {type: Date, required: true}, 
  customer: {type: Schema.ObjectId, ref: 'Customer'},
  item_id: [{type: Schema.ObjectId, ref: 'Product'}],
  currency: [{type: String, required: true}],
  purchase_total: {type: Number, required: true}
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;