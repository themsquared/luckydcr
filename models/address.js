var mongoose = require('mongoose');

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId;

// Address Record
var Address = new Schema({
    id: ObjectId,
    currency: String,
    address: String
});

module.exports = mongoose.model('address', Address);
