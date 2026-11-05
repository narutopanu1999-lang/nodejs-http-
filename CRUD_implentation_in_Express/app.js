const express = require('express');
const studentRoute = require( './routes/student');
const courseRoute = require( './routes/course');

const app = express();
const port = 3000;  
app.get('/', (req, res) => {
    res.send('Welcome to the Student & Course Portal API!');
});
app.use('/students', studentRoute);
app.use('/courses', courseRoute);
app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(port, () => {
    console.log(`Server is running .`);
});