import mongoose from 'mongoose';

var userSchema = mongoose.Schema({
  username: { type: String, required: true, 
  index: {unique: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true}
  }
});

var User = mongoose.model('User', userSchema);

module.exports = User;