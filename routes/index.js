var express = require('express');
var router = express.Router();
var path = require('path');

console.log("index.js routes loaded #1");

/* GET home page. */
router.get('/', function(req, res, next) {
 res.sendFile(path.resolve(__dirname, '../views/index.html'))
});

console.log("index.js routes loaded #2");

module.exports = router;
