var express = require('express');
var router = express.Router();
var Product = require('../../db/product/productController.js');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var acl = require('../../utils/helpers.js').checkPermission;
var fs = require('fs');
var path = require('path');

router.get('/', acl(['admin', 'cashier']), function(req, res){
  if(!req.user.business){
    res.status(500).send('Business not selected!');
  } else {
    Product.getAllProducts(req.user.business, function(err, products){
      if(err){
        res.sendStatus(500);
      } else {
        res.status(200).json(products);
      }
    });
  }
});

router.post('/', acl(['admin']), upload.single('file'), function(req, res){
  var filePath = req.file.path;
  var newProduct = req.body;
  newProduct.business = req.user.business;
  if(!req.user.business){
    res.status(500).send('Business not selected!');
  } else {
    fs.rename(path.resolve(__dirname, '../../../', filePath), path.resolve(__dirname, '../../../images', '' + newProduct.sku + '.jpg'), () => {
      Product.createProduct(newProduct, function(err, product){
        if(err){
          res.sendStatus(500);
        } else {
          res.status(201).json(product);
        }
      });
    });
  }
});

router.get('/:sku', function(req, res){
  var acl = ['admin', 'cashier'];
  helper.checkPermission(req, res, acl);
  Product.getProductBySku(req.params.sku, function(err, product){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(200).json(product);
    }
  });
});

router.put('/:sku', function(req, res){
  var acl = ['admin', 'cashier'];
  helper.checkPermission(req, res, acl);
  Product.updateProductBySku(req.params.sku, req.body, function(err, product){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(200).json(product);
    }
  });
});

router.delete('/:sku', function(req, res){
  var acl = ['admin'];
  helper.checkPermission(req, res, acl);
  Product.deleteProductBySku(req.params.sku, function(err, product){
    if(err){
      res.sendStatus(500);
    } else {
      res.status(200).json(product);
    }
  });
});

module.exports = router;
