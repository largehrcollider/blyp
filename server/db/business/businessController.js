
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
  Business.findOne({name: businessName}, function(business){
    if(status === 'accept'){
      business.users.push({id: username, role: 'cashier'});
      callback(business);
    } else {
      for(var i = 0; i < business.requests.length; i++){
        if(business.requests[i] === username){
          business.requests.splice(i, 1);
        }
      }
      callback(business);
    }
  });
};