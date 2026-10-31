const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Use the name and age in url")
})
app.get("/welcome/:username", (req, res) => {
    const username = req.params.username;
    const role = req.query.role;
    res.send(`Welcome ${username}, your role is ${role}`);
});

app.listen(port, () => {
    console.log(`Server is running`);
});