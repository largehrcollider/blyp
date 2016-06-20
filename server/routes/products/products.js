var express = require('express');
var router = express.Router();
var Product = require('../db/user/productController.js');

router.get('/', function(req, res){
  Product.getAllProducts(function(err, products){
    if(err){
      res.writeHead(500);
    } else {
      res.writeHead(200).send(products);
    }
  });
});

router.post('/', function(req, res){
  Product.createProduct(req.body, function(err, product){
    if(err){
      res.writeHead(500);
    } else {
      res.writeHead(201).send(product);
    };
  });
});

router.put('/:id', function(req, res){
  Product.updateProductById(req.params.id, req.body, function(err, product){
    if(err){
      res.writeHead(500);
    } else {
      res.writeHead(200).send(product);
    }
  });
});

router.delete('/:id', function(req, res){
  Product.deleteProductById(req.params.id, function(err, product){
    if(err){
      res.writeHead(500);
    } else {
      res.writeHead(200).send(product);
    }
  });
});