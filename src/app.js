const express = require('express');

const app = express();

app.get("/api",(req,res) => {
    res.json({msg:"Home route"});
});

app.get("/api/hello",(req,res) => {
    res.json({msg:"Hello from server",status:200});
});

app.get("/api/world",(req,res) => {
    res.json({msg:"World",status:201});
});

app.get("/api/admin",(req,res) => {
    res.json({msg:"admin"});
});

app.listen(3000,() => console.log('running on port 3000'));

