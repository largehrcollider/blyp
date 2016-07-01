var Product = require('./product.js');

//Create operations
exports.createProduct = function(newProduct, callback){
  new Product(newProduct).save(callback);
};

//Read operations
exports.getAllProducts = function(business, callback){
  Product.find({business: business}, callback);
};

exports.getProductBySku = function(business, sku, callback){
  Product.findOne({business: business, sku: sku}, callback);
};

exports.getProductByName = function(business, productname, callback){
  Product.findOne({business: business, name: productname}, callback);
};

//Update operations
exports.updateProductBySku = function(business, sku, update, callback){
  Product.findOneAndUpdate({business: business, sku: sku}, update, {new: true}, callback);
};

exports.updateProductQuantityBySku = function(business, sku, productQuantity, callback){
  Product.findOneAndUpdate({business: business, sku: sku}, {$inc: {quantity: -productQuantity}}, {new: true}
    , callback);
};

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
exports.deleteProductBySku = function(business, sku, callback){
  Product.findOneAndRemove({business: business, sku: sku}, callback);
};
