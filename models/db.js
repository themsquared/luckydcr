var config = require('../config');
var mongoose = require('mongoose');

console.log(config.db);

mongoose.connect("mongodb://"+config.db.host+"/"+config.db.name);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connected to "+config.db.name+" on MongoDB");
});

module.exports = mongoose;
