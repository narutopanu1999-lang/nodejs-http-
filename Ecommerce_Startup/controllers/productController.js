

const serviceMethod = require('../services/productServices.js');

const productFetchData  = (req, res) => {
    serviceMethod.Data(res);
}
const  productAddData = (req, res) => {
    serviceMethod.addToData(res);
}
const productFetchDataById =  (req, res) => {
    serviceMethod.fetchDataById(res, req.params.id);
} 

module.exports = {
    productFetchData,
    productAddData,
    productFetchDataById
}