const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", function(req, res){

    res.send("Yes, it is saturday");
});

app.listen(PORT, function(req, res){
    console.log("Server is listening on port: " + PORT);
})