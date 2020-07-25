const express = require("express");

const app = express();

const port = 80;

app.get("/", (req, res)=>{
    res.send("This is homepage using express app")
});

app.get("/about", (req, res)=>{
    res.send("This is about page using express app")
});

app.post("/contact", (req, res)=>{
    res.send("This is contact page using express app")
});

app.get("/this", (req, res)=>{
    res.status(404).send("page not found using express app")
});

app.listen(port, ()=>{
    console.log(`This application started at ${port}`);
})