var express = require('express');
var router = express.Router();

// var RollingSpider = require("rolling-spider");
// var keypress = require('keypress');
// keypress(process.stdin);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Drone' });
});

module.exports = router;
