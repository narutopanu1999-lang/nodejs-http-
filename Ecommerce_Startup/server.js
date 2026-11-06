const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.get('/', (req, res) => {
    res.send("Welcome to the E-commerce API");
});

app.use('/cart', cartRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.listen(port,() => {
    console.log("Server is running ");
})