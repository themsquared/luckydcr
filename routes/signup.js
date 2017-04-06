var router = require('./base');
var user = require('../models/user');

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  console.log('signup');
  res.render('signup');
});

/* Perform Signup Action */
router.post('/signup', function(req, res, next) {
    if(req.session.userid != null)
    {
        res.redirect("/games");
        return;
    }
    // Sign up user
});

module.exports = router;
