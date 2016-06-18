var User = require('./user.js');

exports.getAllUsers = function(callback){
  User.find({})
  .then(function(err, users){
    if(err){
      callback(err);
    } else {
      callback(users);
    }
  });
};

exports.getUserById = function(id, callback){
  User.findOne({_id: id})
  .then(function(err, user){
    if(err){
      callback(err);
    } else {
      callback(user);
    }
  });
};

exports.getUserByUsername = function(username, callback){
  User.findOne({username: username})
  .then(function(err, user){
    if(err){
      callback(err);
    } else {
      callback(user);
    }
  });
};

exports.updateUserById = function(id, update, callback){
  User.findOneAndUpdate({_id: id}, update)
  .then(function(err, user){
    if(err){
      callback(err);
    } else {
      callback(user);
    }
  });
};

exports.deleteUserById = function(id, callback){
  User.findOneAndRemove({_id: id})
  .then(function(err, user){
    if(err){
      callback(err);
    } else {
      callback(user);
    }
  });
};