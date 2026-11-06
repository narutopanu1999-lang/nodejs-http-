const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send("Fetching all users");
});

userRouter.post('/', (req, res) => {
    res.send("Adding a new user");
});

userRouter.get('/:id', (req, res) => {
    res.send("Fetching user with id: " + req.params.id);
});

module.exports = userRouter;