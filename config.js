var read = require('read-data');
var config = read.sync('config.yaml');

console.log(config);

// Do something fanicer here, but for now pass the object
module.exports = config