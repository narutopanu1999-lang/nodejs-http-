const Data = (res) => {
    res.send("Fetching all products");
}

const addToData = (res) => {
    res.send("Adding a new product");
}

const fetchDataById = (res,id) => {
    res.send("Fetching product with id: " + id);
}


module.exports = {
    Data,
    addToData,
    fetchDataById
}