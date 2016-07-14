var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var businessSchema = mongoose.Schema({
  created_at: {type: Date, required: true, default: Date.now}, 
  name: {type: String, unique: true, required: true},
  users: Array,
  requests: Array
});

businessSchema.plugin(uniqueValidator);
module.exports= mongoose.model('Business', businessSchema);