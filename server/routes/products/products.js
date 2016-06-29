var express = require('express');
var router = express.Router();
var Product = require('../../db/product/productController.js');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var fs = require('fs');
var path = require('path');

router.get('/', function(req, res){
  Product.getAllProducts(function(err, products){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(200).json(products);
    }
  });
});

router.post('/', upload.single('file'), function(req, res){
  var filePath = req.file.path;
  fs.rename(path.resolve(__dirname, '../../../', filePath), path.resolve(__dirname, '../../../images', '' + req.body.sku + '.jpg'), () => {
    Product.createProduct(req.body, function(err, product){
      if(err){
        res.sendStatus(500);
      } else {
        res.status(201).json(product);
      }
    });
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

module.exports = router;
