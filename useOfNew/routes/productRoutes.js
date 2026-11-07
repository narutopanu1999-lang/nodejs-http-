const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.js');

router.get('/', productController.productFetchData);

module.exports = router;    