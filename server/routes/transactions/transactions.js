var express = require('express');
var router = express.Router();
var Transaction = require('../../db/transaction/transactionController.js');
var Product = require('../../db/product/productController.js');
var acl = require('../../utils/helpers.js').checkPermission;

router.get('/', acl(['admin', 'cashier']), function(req, res){
  Transaction.getAllTransactions(function(err, transactions){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(200).json(transactions);
    }
  });
});

router.post('/', acl(['admin', 'cashier']), function(req, res){
  var transaction = req.body;
  var business = req.user.business;
  Transaction.createTransaction(transaction, function(err, transaction){
    if(err){
      res.sendStatus(500);
    } else {
      transaction.basket.forEach(function(item){
        Product.updateProductQuantityBySku(business, item.sku, item.quantity, function(err, product){
          if(err){
            return;
          } else if(product){
            return;
          } else {
            console.log('no product by that sku');
            return;
          }
        });
      });
    }
    res.status(201).json(transaction);
  });
});

router.delete('/:id', acl(['admin']), function(req, res){
  Transaction.deleteTransactionById(req.params.id, function(err, transaction){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(200).json(transaction);
    }
  });
});

module.exports = router;