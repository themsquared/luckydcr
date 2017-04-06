var router = require('./base');

/* GET users listing. */
router.get('/logout', function(req, res, next) {
  req.session.destroy(function(err){
    if(err){
       console.log(err);
    }
    res.redirect('/');
  });
});

module.exports = router;
