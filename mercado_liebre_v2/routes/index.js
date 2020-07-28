var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')

/* HOME */
router.get('/', indexController.home);

/* PRODUCT DETAIL */
router.get('/:id', indexController.productDetail);

module.exports = router;
