const express = require('express');
const cartRouter = express.Router();

cartRouter.get('/', (req, res) => {
    res.send("Fetching Cart");
});
cartRouter.get('/:id', (req, res) => {
     res.send("Fetching cart for user with id: " + req.params.id);
});

cartRouter.post('/:id', (req, res) => {
    res.send("Adding product to cart for user with id: " + req.params.id);
});

module.exports = cartRouter;
