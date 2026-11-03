const express = require('express');
const app = express();
const port = 3000;
const ordersRouter = require('./routes/Orders');
const productsRouter = require('./routes/products');
app.use('/orders', ordersRouter);
app.use('/products', productsRouter);

app.listen(port, () => {
    console.log(`Server is running .`);
});