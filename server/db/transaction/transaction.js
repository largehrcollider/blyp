import mongoose from 'mongoose';

var transactionSchema = mongoose.Schema({
  created_at: {type: Date, required: true}, 
  index: {required: true, unique: true},
  customer: {type: String, required: true},
  items: {type: Array, required: true},
  currency: [{type: Item, required: true}],
  amount: {type: Number, required: true}
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = User;