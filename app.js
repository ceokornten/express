const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(30001 , function(req,res){
    console.log("This server run on port 30001");
});