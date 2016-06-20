var express = require('express');
var router = express.Router();
var Transaction = require('../db/user/transactionController.js');

router.get('/', function(req, res){
  Transaction.getAllTransactions(function(err, transactions){
    if(err){
      res.writeHead(500);
    } else {
      res.writeHead(200).send(transactions);
    }
  });
});

router.post('/', function(req, res){
  Transaction.createTransaction(req.body, function(err, transaction){
    if(err){
      res.writeHead(500);
    } else {
      res.writeHead(201).send(transaction);
    }
  });
});

router.put('/:id', function(req, res){
  Transaction.updateTransactionById(req.params.id, req.body, function(err, transaction){
    if(err){
      res.writeHead(500);
    } else {
      res.writeHead(200).send(transaction);
    }
  });
});

router.delete('/:id', function(req, res){
  Transaction.deleteTransactionById(req.params.id, function(err, transaction){
    if(err){
      res.writeHead(500);
    } else {
      res.writeHead(200).send(transaction);
    }
  });
});