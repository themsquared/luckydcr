var router = require('./base');

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('Login Page');
});

module.exports = router;
