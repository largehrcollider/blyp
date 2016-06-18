var User = require('./user.js');

exports.getAllUsers = function(callback){
  User.find({})
    .then(function(users){
      callback(users);
    });
};

exports.getUserById = function(callback){
  User.find({})
    .then(function(user){
      callback(user);
    })
}