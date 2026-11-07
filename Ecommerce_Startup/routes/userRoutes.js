const express = require('express');
const userRouter = express.Router();
const userFun = require('../controllers/userController.js');

userRouter.get('/', userFun.userList);

userRouter.post('/', userFun.userAdd);

userRouter.get('/:id', userFun.userFetchById);

module.exports = userRouter;