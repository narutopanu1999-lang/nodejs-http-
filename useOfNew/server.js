const express = require('express'); 
const app = express();
const productRouter = require('./routes/productRoutes.js');
app.use('/api/products', productRouter);

app.listen(3000, () => {
    console.log("Server is running .");
});