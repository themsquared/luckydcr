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

module.exports = mongoose.model('transaction',Transaction);
