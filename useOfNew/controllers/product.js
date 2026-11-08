const path = require('path');

const productFetchData  = (req, res) => {
    res.sendFile(path.join(__dirname, '../view/page.html'));
}

const addProduct = (req, res) => {
    const value = req.body;
    console.log(value);
    res.status(201).json({
        message: "Product added",
        product: value
    })
}

module.exports = {
    productFetchData,
    addProduct
}