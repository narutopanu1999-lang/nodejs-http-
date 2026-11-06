const cartController =(req, res) => {
    res.send("Fetching Cart");
}

const cartControllerById = (req, res) => {
     res.send("Fetching cart for user with id: " + req.params.id);
}

const addToCartController = (req, res) => {
    res.send("Adding product to cart for user with id: " + req.params.id);
}

module.exports = {
    cartController,
    cartControllerById,
    addToCartController
}