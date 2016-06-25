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
exports.getAllProducts = function(callback){
  Product.find({})
  .then(function(products){
    callback(null, products);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.getProductBySku = function(sku, callback){
  Product.findOne({sku: sku})
  .then(function(product){
    callback(null, product);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.getProductByName = function(productname, callback){
  Product.findOne({name: productname})
  .then(function(product){
    callback(null, product);
  })
  .catch(function(err){
    callback(err);
  });
};

//Update operations
exports.updateProductById = function(id, update, callback){
  Product.findOneAndUpdate({_id: id}, update, {new: true})
  .then(function(product){
    callback(null, product);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.updateProductBySku = function(sku, update, callback){
  Product.findOneAndUpdate({sku: sku}, update, {new: true})
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

exports.deleteProductBySku = function(sku, callback){
  Product.findOneAndRemove({sku: sku})
  .then(function(product){
    callback(null, product);
  })
  .catch(function(err){
    callback(err);
  });
};
