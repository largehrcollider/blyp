var express = require('express');
var router = express.Router();
var Product = require('../../db/product/productController.js');

router.get('/', function(req, res){
  Product.getAllProducts(function(err, products){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(200).json(products);
    }
  });
});

router.post('/', function(req, res){
  Product.createProduct(req.body, function(err, product){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(201).json(product);
    }
  });
});

router.get('/:sku', function(req, res){
  Product.getProductBySku(req.params.sku, function(err, product){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(200).json(product);
    }
  });
});

router.put('/:sku', function(req, res){
  Product.updateProductBySku(req.params.sku, req.body, function(err, product){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(200).json(product);
    }
  });
});

router.delete('/:sku', function(req, res){
  Product.deleteProductBySku(req.params.sku, function(err, product){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(200).json(product);
    }
  });
});

// router.put('/:id', function(req, res){
//   Product.updateProductById(req.params.id, req.body, function(err, product){
//     if(err){
//       res.sendStatus(500);
//     } else {
//       res.status(200).json(product);
//     }
//   });
// });

// router.delete('/:id', function(req, res){
//   Product.deleteProductById(req.params.id, function(err, product){
//     if(err){
//       res.sendStatus(500);
//     } else {
//       res.status(200).json(product);
//     }
//   });
// });

module.exports = router;