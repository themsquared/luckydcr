var router = require('./base');
var user = require('../models/user');
var config = require('../config');
var passwordHash = require('password-hash');
var reCAPTCHA = require('recaptcha2');

var recaptcha = new reCAPTCHA({
      siteKey: config.app.recaptcha.key,
      secretKey: config.app.recaptcha.secret,
      ssl: config.app.recaptcha.ssl || true
    });

// Generate hash with the configured parameters.
function generatePasswordHash(password)
{
    return passwordHash.generate(password,{algorithm: config.app.security.algorithm, saltLength: config.app.security.saltlength, iterations: config.app.security.iterations});
}

/* GET signup page. */
router.get('/signup', function(req, res, next) {
    // Redirect if logged in.
    if(req.session.userid != null)
    {
        res.redirect("/games");
        return;
    }
    res.render('signup',{recaptcha: recaptcha, error: req.query.error, page: "Sign Up"});
});

/* Perform Signup Action */
router.post('/signup', function(req, res, next) {
    // Redirect if logged in
    if(req.session.userid != null)
    {
        res.redirect("/games");
        return;
    }
    // Sign up user

   recaptcha.validateRequest(req)
  .then(function(){
    // validated and secure
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    user.find({$or: [{username:username},{email:email}]},function(err, users){
      if(err) { 
        console.log(err); 
      } else {
        console.log(users);
        if(users.length > 0) {
          res.redirect('/signup?error=Username%20or%20e-mail%20already%20in%20use.'); 
          return;
        }
        var User = new user({username: username, email: email, password: generatePasswordHash(password)});
        console.log(User);
        User.save(function(err,user){
           if(err){
             console.log(err);
           } else {
             res.redirect('/login?message=User created! Please log in.');
           }
        });
      }
    });
  })
  .catch(function(errorCodes){
    // invalid
    res.redirect('/signup?error=Invalid%20reCAPTCHA');
  });
});

module.exports = router;

