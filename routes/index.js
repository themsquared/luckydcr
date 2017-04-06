var router = require('./base');
var config = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(config.app);
  res.render('index', { title: config.app.title });
});

module.exports = router;
