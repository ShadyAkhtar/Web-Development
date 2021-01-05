const express = require("express");

const path = require("path");

const app = express();

const port = 80;

// For serving static files 
app.use('/static', express.static('static'))

// Set the template engine as pug 
app.set('view engine', 'pug');

// set the view directory 
app.set('views', path.join(__dirname, 'views'));

// Our pug demo endpoint
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo', { title: 'Hey guys', message: 'Hello there and thanks for telling me how to use pug!' })
});

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