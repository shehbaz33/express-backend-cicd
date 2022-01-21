const express = require('express');

const app = express();

app.get("/",(req,res) => {
    res.json({msg:"Home"});
});

app.get("/hello",(req,res) => {
    res.json({msg:"Hello"});
});

app.get("/world",(req,res) => {
    res.json({msg:"World"});
});

app.get("/admin",(req,res) => {
    res.json({msg:"admin"});
});

app.listen(5000,() => console.log('running on port 5000'));

