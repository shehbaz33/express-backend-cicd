const express = require('express');

const app = express();

app.get("/",(req,res) => {
    res.json({msg:"Home"});
});

app.get("/hello",(req,res) => {
    res.json({msg:"Hello from server",status:200});
});

app.get("/world",(req,res) => {
    res.json({msg:"World",status:201});
});

app.get("/admin",(req,res) => {
    res.json({msg:"admin"});
});

app.listen(3000,() => console.log('running on port 3000'));

