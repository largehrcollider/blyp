
var Business = require('./business.js');

exports.createBusiness = function(newBusiness, callback){
  new Business(newBusiness).save(callback);
};

exports.getAllBusinesss = function(callback){
  Business.find({}, callback);
};

exports.getBusinessByName = function(name, callback){
  Business.findOne({name: name}, callback);
};

exports.deleteBusinessByName = function(name, callback){
  Business.findOneAndRemove({name: name}, callback);
};

exports.employementRequest = function(username, businessName, status, callback){
  Business.findOne({name: businessName}, callback);
};