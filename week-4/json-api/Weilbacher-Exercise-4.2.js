/*
============================================
; Title:  Weilbacher-Exercise-4.2.js
; Author: Andrew Weilbacher
; Date: 2 September 2019
; Description: Displays a formatted header and example Node.js request
;===========================================
*/

// header
const header = require('../Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Exercise 4.2");

// start program

var express = require("express");
var http = require("http");
var app = express();

app.get("/customer/:id", function (request, response) {

    var id = parseInt(request.params.id, 10);
    response.json({

        firstName: "Andrew",

        lastName: "Weilbacher",

        employeeId: 1

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});

// end program