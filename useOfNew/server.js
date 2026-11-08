const express = require('express'); 
const path = require('path');
const app = express();
const productRouter = require('./routes/productRoutes.js');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/products', productRouter);

app.listen(3000, () => {
    console.log("Server is running .");
});