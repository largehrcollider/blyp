var Product = require('./product.js');

//Create operations
exports.createProduct = function(newProduct, callback){
  new Product(newProduct).save()
  .then(function(product){
    callback(null, product);
  })
  .catch(function(err){
    callback(err);
  });
};

//Read operations
exports.getAllProducts = function(businessName, callback){
  Product.find({business: businessName})
  .then(function(products){
    callback(null, products);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.getProductBySku = function(businessName, sku, callback){
  Product.findOne({business: businessName, sku: sku})
  .then(function(product){
    callback(null, product);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.getProductByName = function(businessName, productname, callback){
  Product.findOne({business: businessName, name: productname})
  .then(function(product){
    callback(null, product);
  })
  .catch(function(err){
    callback(err);
  });
};

//Update operations
exports.updateProductById = function(businessName, id, update, callback){
  Product.findOneAndUpdate({business: businessName, _id: id}, update, {new: true})
  .then(function(product){
    callback(null, product);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.updateProductBySku = function(businessName, sku, update, callback){
  Product.findOneAndUpdate({business: businessName, sku: sku}, update, {new: true})
  .then(function(product){
    callback(null, product);
  })
  .catch(function(err){
    callback(err);
  });
};

//Delete operations
exports.deleteProductById = function(id, callback){
  Product.findOneAndRemove({_id: id})
  .then(function(product){
    callback(null, product);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.deleteProductBySku = function(businessName, sku, callback){
  Product.findOneAndRemove({business: businessName, sku: sku})
  .then(function(product){
    callback(null, product);
  })
  .catch(function(err){
    callback(err);
  });
};
