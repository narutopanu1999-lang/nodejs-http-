const express = require('express');
const productRouter = express.Router();
const productFun = require('../controllers/productController.js');

productRouter.get('/', productFun.productFetchData);

productRouter.post('/', productFun.productAddData);

productRouter.get('/:id', productFun.productFetchDataById);

module.exports = productRouter;