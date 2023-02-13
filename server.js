const express = require("express");
const app = express();

// What the server should send when the browser makes first contact with it.
// "/" represents the root folder
app.get("/", function(req, res){
    res.send("<h1>Hello World!</h1>");
});

// Our sever will start on this port
app.listen(3000, function(){
    console.log("Sever started on port 3000");
});