var router = require('./base');
var passwordHash = require('password-hash');
var user = require('../models/user');

/* GET user login. */
router.get('/login', function(req, res, next) {
  res.render('login', {error:req.query.error});
});

/* POST user login */
router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  user.findOne({username: username},function(err, user){
    if(err)
    {
      res.redirect('/login?error=A login error occurred!'); 
    } else {
      if(passwordHash.verify(password,user.password)){
        req.session.loggedin = true;
        req.session.userid = user.username;
        req.session.save(function(err){
          console.log(err);
          res.redirect("/games");
        });
      } else {
        res.redirect('/login?error=Username and password did not match!');
      }
    }
  });
});

module.exports = router;
