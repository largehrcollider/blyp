var Product = require('./product.js');

//Create operations
/**
 * Creates a new product in DB
 * @param {object} newProduct - Product to be added to the database. Should conform to mongoose schema.
 * @param {function} callback - Node err back style callback. Newly created product passed to callback
 */
exports.createProduct = function(newProduct, callback){
  if(newProduct.price < 0 || newProduct.price > Number.MAX_SAFE_INTEGER){
    console.log('The price is out of bounds!');
    callback(null, null);
  } else {
    new Product(newProduct).save(callback);
  }
};

//Read operations
/**
 * Gets all products for a particular business
 * @param {string} business - Business that products will be returned for
 * @param {function} callback - Node err back style callback
 */
exports.getAllProducts = function(business, callback){
  Product.find({business: business}, callback);
};

/**
 * Gets a single product based upon its sku for a particular business
 * @param {string} business - Business that products will be returned for
 * @param {string} sku - Sku for the product
 * @param {function} callback - Node err back style callback. Products passed to callback
 */
exports.getProductBySku = function(business, sku, callback){
  Product.findOne({business: business, sku: sku}, callback);
};

/**
 * Gets a single product based upon its name for a particular business
 * @param {string} business - Business that products will be returned for
 * @param {string} name - Name for the product
 * @param {function} callback - Node err back style callback. Found product passed to callback
 */
exports.getProductByName = function(business, productname, callback){
  Product.findOne({business: business, name: productname}, callback);
};

//Update operations
/**
 * Updates a single product based upon its sku for a particular business
 * @param {string} business - Business that products will be returned for
 * @param {string} sku - Sku for the product
 * @param {object} update - Updates the keys in the update object for the Product on the DB. 
 * @param {function} callback - Node err back style callback. Updated product passed to callback
 */
exports.updateProductBySku = function(business, sku, update, callback){
  Product.findOneAndUpdate({business: business, sku: sku}, update, {new: true}, callback);
};

/**
 * Increments or decrements a products quantity
 * @param {string} business - Business that products will be returned for
 * @param {string} sku - Sku for the product
 * @param {number} productQuantity - Positive numbers will decrement and negative will increment
 * @param {function} callback - Node err back style callback. Update product passed to callback
 */
exports.updateProductQuantityBySku = function(business, sku, productQuantity, callback){
  Product.findOneAndUpdate({business: business, sku: sku}, {$inc: {quantity: -productQuantity}}, {new: true}
    , callback);
};

/**
 * Adds a category to a product
 * @param {string} business - Business that products will be returned for
 * @param {string} sku - Sku for the product
 * @param {number} category - The category to be added
 * @param {function} callback - Node err back style callback. Update product passed
 */
exports.addProductCategoryBySku = function(business, sku, category, callback){
  Product.findOne({business: business, sku: sku}, function(err, product){
    if(err){
      callback(err);
    } else {
      product.categories.push(category);
      product.save(callback);
    }
  });
};

//Delete operations
/**
 * Deletes a product
 * @param {string} business - Business that products will be returned for
 * @param {string} sku - Sku for the product
 * @param {function} callback - Node err back style callback. Deleted product passed to callback
 */
exports.deleteProductBySku = function(business, sku, callback){
  Product.findOneAndRemove({business: business, sku: sku}, callback);
};
