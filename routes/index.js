var router = require('./base');
var config = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { });
});

module.exports = router;
