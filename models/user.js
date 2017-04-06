var db = require('./db');
var mongoose = require('mongoose');

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId;

// Transactional Record
var Transaction = new Schema({
    id: ObjectId,
    amount: Number,
    txId: String,
    address: ObjectId,         // Reference to User Address
    remoteAdress: String
});

// Address Record
var Address = new Schema({
    id: ObjectId,
    currency: String,
    address: String
});

// User Record
var User = new Schema({
    id: ObjectId,
    username: {type: String, required: true, index: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    adresses: [Address],
    transactions: [Transaction],
    balance: {type: Number, default: 0.0}
});
