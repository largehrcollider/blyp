var User = require('./user.js');

exports.createUser = function(newUser, callback){
  new User(newUser).save(callback);
};

exports.getAllUsers = function(callback){
  User.find({}, callback);
};

exports.getUserByUsername = function(username, callback){
  User.findOne({username: username})
  .then(function(user){
    callback(null, user);
  })
  .catch(function(err){
    callback(err);
  });
};

//Not tested
exports.updateUserById = function(id, update, callback){
  User.findOneAndUpdate({_id: id}, update, {new: true})
  .then(function(user){
    callback(null, user);
  })
  .catch(function(err){
    callback(err);
  });
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
  User.findOneAndRemove({username: username})
  .then(function(user){
    callback(null, user);
  })
  .catch(function(err){
    callback(err);
  });
};