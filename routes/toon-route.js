var express = require('express');
var router = express.Router();
var controller = require('../controllers/toon-controller');

router.get('/', controller.get);

module.exports = router;
