/*
============================================
; Title:  Weilbacher-Exercise-4.3.js
; Author: Andrew Weilbacher
; Date: 2 September 2019
; Description: Displays a formatted header and example Node.js request
;===========================================
*/

// header
const header = require('../Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Exercise 4.3"));

// start program

var express = require("express");

var http = require("http");

var app = express();

app.get("/not-found", function(request, response) {

    response.status(404);

    response.json({

        error: "Resource not available."

    })

});

app.get("/ok", function(request, response) {

    response.status(200);

    response.json({

        message: "Page loaded."

    })

});

app.get("/not-implemented", function(request, response) {

    response.status(501);

    response.json({

        error: "Page not created."

    })

});

http.createServer(app).listen(8080, function() {

   console.log("Application started on port 8080!");

});

// end program