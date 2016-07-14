var express = require('express');
var router = express.Router();
var Product = require('../../db/product/productController.js');
var acl = require('../../utils/helpers.js').checkPermission;
var fs = require('fs');
var path = require('path');
var images = require('../helpers/images.js');

/**
 * Gets all products for a business
 * Request object must have a 'user' property generated from a jwt token. It must contain a business name.
 * Returns an array of objects
 */
router.get('/', acl(['admin', 'cashier']), function(req, res){
  Product.getAllProducts(req.user.business, function(err, products){
    if(err){
      console.error(err);
      res.sendStatus(500);
    } else {
      res.status(200).json(products);
    }
  });
});

/**
 * Creates a new product in the products collection
 * Request object must have a 'user' property generated from a jwt token. It must contain a business name.
 * If successful, returns the newly created product
 */
router.post('/', acl(['admin']), images.multer.single('file'), images.saveImage, function insert (req, res){
  var product = req.body;

  // if file was uploaded, append imgSrc to product properties
  if (req.file && req.file.imgSrc) {
    product.imgSrc = req.file.imgSrc;
  }

  // separate comma delimited categories
  product.categories = product.categories.split(',').map(c => c.trim());

  // register to what business this product belongs
  product.business = req.user.business;

  // save product to db
  Product.createProduct(product, function (err, product){
    if(err){
      console.log('There was an error creating the product!');
      console.error(err);
      res.sendStatus(500);
    } else if(!product) {
      console.log('There was an error creating the product!');
      res.sendStatus(500);
    } else {
      res.status(201).json(product);
    }
  });
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
  console.log(req.body);
  if(!req.user.business){
    res.status(500).send('Business not selected!');
  } else {
    Product.updateProductBySku(req.user.business, req.params.sku, req.body, function(err, product){
      if(err){
        res.status(500).send(err.message);
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

/**
 * Deletes a product by it's sku number
 *
 *
 */
router.delete('/accept', acl(['admin']), function(req, res){
  if(req.accept){

  } else {
  }
});
module.exports = router;
