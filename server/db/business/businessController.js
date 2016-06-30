
var Business = require('./business.js');

exports.createBusiness = function(reqBody, tokenPayload, callback){
  var newBusiness = {
    name: reqBody.business,
    users: [{username: tokenPayload.username, role: 'admin'}]
  };
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