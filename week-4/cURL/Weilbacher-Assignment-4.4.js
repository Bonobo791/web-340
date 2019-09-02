/*
============================================
; Title:  Weilbacher-Assignment-4.4.js
; Author: Andrew Weilbacher
; Date: 2 September 2019
; Description: Displays a formatted header and example curl requests
;===========================================
*/

// header
const header = require('../Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Exercise 4.4"));

// start program

var express = require("express");
var http = require("http");

var app = express();

app.get("/", function(req, res){
    res.send("Get request successful.");
});

app.put("/", function(req, res){
    res.send("Send request successful.");
});

app.post("/", function(req, res){
    res.send("Post request successful.");
});

app.delete("/", function(req, res){
    res.send("Delete request successful.");
});

http.createServer(app).listen(8080, function(){
    console.log("\nWe are live on port 8080!")
})

//end program