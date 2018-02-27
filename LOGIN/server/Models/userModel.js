var mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');
var users = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: String,
    fullname: String,
});
users.plugin(uniqueValidator);
var User = mongoose.model('User', users);

module.exports = { User };