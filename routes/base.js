var express = require('express');
var app = express();
var router = express.Router();
var config = require('../config');

// predicate the router with a check and bail out when needed
router.use(function (req, res, next) {
  res.locals = config.app;
  next()
});

module.exports = router;
