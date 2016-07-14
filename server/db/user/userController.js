var User = require('./user.js');

exports.createUser = function(newUser, callback){
  new User(newUser).save(callback);
};

exports.getAllUsers = function(callback){
  User.find({}, callback);
};

exports.getUserByUsername = function(username, callback){
  User.findOne({username: username}, callback);
};

exports.updateByUsername = function(username, update, callback){
  User.findOneAndUpdate({username: username}, update, {new: true}, callback);
};

exports.updateUserRequests = function(username, business, accept, callback){
  User.findOne({username: username}, function(err, user){
    if(err){
      callback(err);
    } else {
      var index = user.requests.indexOf(business);
      if(index !== -1){
        if(accept){
          user.requests.splice(index, 1);
          if(!user.businesses.includes(business)) {
            user.businesses.push(business);
          }
          user.save(callback);
        } else {
          user.requests.splice(index, 1);
          user.save(callback);
        }
      } else {
        callback("The user's request was not found with the business!");
      }
    }
  });
};

exports.deleteUserByUsername = function(username, callback){
  User.findOneAndRemove({username: username}, callback);
};

exports.addRequest = function(username, businessName, callback){
  User.findOne({username: username}, function(err, user){
    if(err){
      callback(err);
    } else {
      if(user.requests.indexOf(businessName) === -1){
        user.requests.push(businessName);
      }
      user.save(callback);
    }
  });
};

exports.deleteBusiness = function(username, businessName, callback){
  User.findOne({username: username}, function(err, user){
    if(err){
      callback(err);
    } else {
      for(var i = 0; i < user.businesses.length; i++){
        if(user.businesses[i] === businessName){
          user.businesses.splice(i, 1);
        }
      }
      user.save(callback);
    }
  });
};
