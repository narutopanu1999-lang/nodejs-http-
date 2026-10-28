const express = require("express");
const app = express();

app.use((req, res, next)=>{
    console.log("first middleware");
    next();
})
app.get("/",(req,res)=>{
    res.send(`<h1>Welcome </h1>`)
})

app.use("/student",(req,res,next)=>{
    console.log("this is student page");
    next();
})
app.get("/student",(req,res)=>{
    res.send(`<h1>student Page</h1>`);
})

app.use("/teacher",(req,res,next)=>{
    console.log("this is teacher page");
    next();
})

app.get("/teacher",(req,res)=>{
    res.send(`<h1>Welcome to Teacher page</h1>`);
})

app.listen(3000,()=>{
    console.log("Server is running");
})