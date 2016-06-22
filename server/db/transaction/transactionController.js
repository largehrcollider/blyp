var Transaction = require('./transaction.js');
var ProductController = require('../product/productController.js');

//Deducts the quantity purchased from the product quantity in the db
//Adds the item name to the transaction
var processTransaction = function(transaction){
  transaction.item_id.forEach(function(item){
    ProductController.updateProductBySku(item.id, {$inc: {quantity: -item.quantity}}, function(err, product){
      item.name = product.name;
    });
  });
  return transaction;
};

exports.getAllTransactions = function(callback){
  Transaction.find({})
  .then(function(transactions){
    callback(null, transactions);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.getTransactionById = function(id, callback){
  Transaction.findOne({_id: id})
  .then(function(transaction){
    callback(null, transaction);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.createTransaction = function(transaction, callback){
  Transaction(processTransaction(transaction)).save()
  .then(function(transaction){
    console.log(transaction + 'saved');
    callback(null, transaction);
  })
  .catch(function(err){
    callback(err);
  });
};

//Not tested
exports.updateTransactionById = function(id, update, callback){
  Transaction.findOneAndUpdate({_id: id}, update, {new: true})
  .then(function(transaction){
    callback(null, transaction);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.TransactionById = function(id, callback){
  Transaction.findOneAndRemove({_id: id})
  .then(function(transaction){
    callback(null, transaction);
  })
  .catch(function(err){
    callback(err);
  });
};

