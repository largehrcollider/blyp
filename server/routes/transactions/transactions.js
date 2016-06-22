var express = require('express');
var router = express.Router();
var Transaction = require('../../db/transaction/transactionController.js');

router.get('/', function(req, res){
  Transaction.getAllTransactions(function(err, transactions){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(200).json(transactions);
    }
  });
});

router.post('/', function(req, res){
  Transaction.createTransaction(req.body, function(err, transaction){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(201).json(transaction);
    }
  });
});

router.put('/:id', function(req, res){
  Transaction.updateTransactionById(req.params.id, req.body, function(err, transaction){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(200).json(transaction);
    }
  });
});

router.delete('/:id', function(req, res){
  Transaction.deleteTransactionById(req.params.id, function(err, transaction){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(200).json(transaction);
    }
  });
});

module.exports = router;