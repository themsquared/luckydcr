var db = require('./db');
var mongoose = require('mongoose');

var Address = require('./address');
var Transaction = require('./transaction');

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId;

// User Record
var User = new Schema({
    id: ObjectId,
    username: {type: String, required: true, index: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    adresses: [Address.schema],
    transactions: [Transaction.schema],
    balance: {type: Number, default: 0.0}
});

module.exports = mongoose.model('User',User);
