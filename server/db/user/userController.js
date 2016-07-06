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

exports.updateUserRequests = function(username, business, callback){
  User.findOne({username: username}, function(err, user){
    if(err){
      callback(err);
    } else {
      for(var i = 0; i < user.requests.length; i++){
        if(user.requests[i] === business){
          user.requests.splice(i, 1);
          break;
        }
      }
      callback(null, user);
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