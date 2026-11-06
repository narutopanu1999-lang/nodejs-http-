const express = require('express');
const productRouter = express.Router();

productRouter.get('/', (req, res) => {
    res.send("Fetching all products");
});

productRouter.post('/', (req, res) => {
    res.send("Adding a new product");
});

productRouter.get('/:id', (req, res) => {
    res.send("Fetching product with id: " + req.params.id);
});

module.exports = productRouter;