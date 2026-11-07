const productFetchData  = (req, res) => {
    res.send("Fetching all products");
}
const  productAddData = (req, res) => {
    res.send("Adding a new product");
}
const productFetchDataById =  (req, res) => {
    res.send("Fetching product with id: " + req.params.id);
} 

module.exports = {
    productFetchData,
    productAddData,
    productFetchDataById
}