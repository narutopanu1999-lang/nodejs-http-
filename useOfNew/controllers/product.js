const path = require('path');

const productFetchData  = (req, res) => {
    res.sendFile(path.join(__dirname, '../new/page.html'));
}

module.exports = {
    productFetchData
}