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

exports.createTransaction = function(transaction, callback){
  //processTransaction(transaction);
  Transaction(transaction).save()
  .then(function(transaction){
    callback(null, transaction);
  })
  .catch(function(err){
    callback(err);
  });
};

//Not tested

exports.deleteTransactionById = function(id, callback){
  Transaction.findOneAndRemove({_id: id})
  .then(function(transaction){
    callback(null, transaction);
  })
  .catch(function(err){
    callback(err);
  });
};

