
var Business = require('./business.js');

exports.createBusiness = function(reqBody, tokenPayload, callback){
  var newBusiness = reqBody;
  newBusiness.name = reqBody.business,
  newBusiness.users = [{username: tokenPayload.username, role: 'admin'}];
  new Business(newBusiness).save(callback);
};

exports.getAllBusinesses = function(callback){
  Business.find({}, callback);
};

exports.getBusinessByName = function(name, callback){
  Business.findOne({name: name}, callback);
};

exports.deleteBusinessByName = function(name, callback){
  Business.findOneAndRemove({name: name}, callback);
};

/**
 * 
 * @param {string} business - 
 * @param {string} sku - 
 * @param {function} callback - 
 */
exports.updateEmploymentRequest = function(username, businessName, status, callback){
  Business.findOne({name: businessName}, function(err, business){
    if(err){
      callback(err);
    } else {
      var index = business.requests.indexOf(username);
      if(index !== -1){
        if(status === 'accept'){
          business.users.push({username: username, role: 'cashier'});
          business.requests.splice(index, 1);
          business.save(function(){
            callback(null, business.users);
          });
        } else {
          business.requests.splice(index, 1);
          business.save();
          callback(null, business);
        }
      } else {
        callback("The user's request was not found with the business!");
      }
    }
  });
};