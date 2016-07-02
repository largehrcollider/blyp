var express = require('express');
var router = express.Router();
var Product = require('../../db/product/productController.js');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var acl = require('../../utils/helpers.js').checkPermission;
var fs = require('fs');
var path = require('path');

/**
 * Gets all products for a business
 * Request object must have a 'user' property generated from a jwt token. It must contain a business name.
 * Returns an array of objects
 */
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

/**
 * Creates a new product in the products collection
 * Request object must have a 'user' property generated from a jwt token. It must contain a business name.
 * If successful, returns the newly created product
 */
router.post('/', acl(['admin']), upload.single('file'), function(req, res){
  var filePath =  req.file ? req.file.path : '';
  var newProduct = req.body;
  newProduct.business = req.user.business;
  if(!req.user.business){
    res.status(500).send('Business not selected!');
  } else {
    fs.rename(path.resolve(__dirname, '../../../', filePath), path.resolve(__dirname, '../../../images', '' + newProduct.sku + '.jpg'), () => {
      Product.createProduct(newProduct, function(err, product){
        if(err){
          res.status(500).send(err.message);
        } else {
          res.status(201).json(product);
        }
      });
    });
  }
});

/**
 * Gets a product by it's sku number
 * Request object must have a 'user' property generated from a jwt token. It must contain a business name.
 * If successful, returns the product
 */
router.get('/:sku', acl(['admin', 'cashier']), function(req, res){
  if(!req.user.business){
    res.status(500).send('Business not selected!');
  } else {
    Product.getProductBySku(req.user.business, req.params.sku, function(err, product){
      if(err){
        res.sendStatus(500);
      } else if(!product){
        res.status(404).send('Could not find the product!');
      } else {
        res.status(200).json(product);
      }
    });
  }
});

/**
 * Updates a product it's sku number by overriding the current values with the values contained in the request
 * Request object must have a 'user' property generated from a jwt token. It must contain a business name.
 * If successful, returns the newly updated product
 */
router.put('/:sku', acl(['admin', 'cashier']), function(req, res){
  if(!req.user.business){
    res.status(500).send('Business not selected!');
  } else {
    Product.updateProductBySku(req.user.business, req.params.sku, req.body, function(err, product){
      if(err){
        res.sendStatus(500);
      } else if(!product) {
        res.status(404).send('Could not find product!');
      } else {
        res.status(200).json(product);
      }
    });
  }
});

/**
 * Deletes a product by it's sku number
 * Request object must have a 'user' property generated from a jwt token. It must contain a business name.
 * If successful, returns the deleted product
 */
router.delete('/:sku', acl(['admin']), function(req, res){
  if(!req.user.business){
    res.status(500).send('Business not selected!');
  } else {
    Product.deleteProductBySku(req.user.business, req.params.sku, function(err, product){
      if(err){
        res.sendStatus(500);
      } else {
        res.status(200).json(product);
      }
    });
  }
});

module.exports = router;
