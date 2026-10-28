const express = require("express");

const app = express();

app.use((req,res,next)=>{
    res.send(`<h1>This is a middle ware response</h1>`)
    next();
})


app.listen(3000,() =>{
    console.log("Server is up and running on port 3000! Ready to handle requests.")
})
