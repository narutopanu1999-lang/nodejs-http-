const express = require('express');
const cartRouter = express.Router();
const cartFun = require('../controllers/cartController.js');

cartRouter.get('/', cartFun.cartController);
cartRouter.get('/:id', cartFun.cartControllerById);
cartRouter.post('/:id', cartFun.addToCartController);

module.exports = cartRouter;
