var Transaction = require('./transaction.js');

exports.getAllTransactions = function(callback){
  Transaction.find({})
  .then(function(err, transactions){
    if(err){
      callback(err);
    } else {
      callback(transactions);
    }
  });
};

exports.getTransactionById = function(id, callback){
  Transaction.findOne({_id: id})
  .then(function(err, user){
    if(err){
      callback(err);
    } else {
      callback(user);
    }
  });
};