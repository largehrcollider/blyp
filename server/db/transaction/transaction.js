var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = mongoose.Schema({
  created_at: {type: Date, required: true, default: Date.now }, 

  //References to customers in customer collection
  customer: {type: Schema.ObjectId, ref: 'Customer'},

  //References to items in item collection
  item_id: Array,

  //How was the purchase made, Amex, MasterCard, Cash etc.
  currency: {type: String},
  purchase_total: {type: Number}
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;