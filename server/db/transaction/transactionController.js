var Transaction = require('./transaction.js');

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
  Transaction(transaction).save()
  .then(function(transaction){
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