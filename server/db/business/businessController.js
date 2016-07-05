
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

exports.addUser = function(businessName, userObj, callback){
  Business.findOne({name: businessName}, function(err, business){
    if(err){
      callback(err);
    } else {
      business.users.push(userObj);
      business.save(callback);  
    }
  });
};

exports.removeUser = function(businessName, username, callback){
  Business.findOne({name: businessName}, function(err, business){
    if(err){
      callback(err);
    } else {
      for(var i = 0; i < business.users.length; i++){
        if(business.users[i].username === username){
          business.users.splice(i, 1);
          business.save(callback);
        }
      }
    }
  });
};

exports.updateUserRole = function(businessName, userObj, callback){
  Business.findOne({name: businessName}, function(err, business){
    if(err){
      callback(err);
    } else {
      for(var i = 0; i < business.users.length; i++){
        if(business.users[i].username === userObj.username){
          business.users[i].role = userObj.role;
          business.save(callback);
        }
      }
    }
  });
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
          business.save(callback);
        }
      } else {
        callback("The user's request was not found with the business!");
      }
    }
  });
};

exports.addEmploymentRequest = function(username, businessName, callback){
  Business.findOne({name: businessName}, function(err, business){
    if(err){
      callback(err);
    } else {
      if(business){
        business.requests.push(username);
        business.save();
      }
      callback(null, business);
    }
  });
};

exports.getProperty = function(businessName, propertyKey, callback){
  Business.findOne({name: businessName}, function(err, business){
    if(err){
      callback(err);
    } else {
      callback(null, business ? business[propertyKey] : null);
    }
  });
};