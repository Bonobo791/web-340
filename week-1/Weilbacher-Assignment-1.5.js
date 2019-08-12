
/*
============================================
; Title:  Weilbacher-Exercise-1.5.js
; Author: Andrew Weilbacher
; Date: 10 August 2019
; Description: Displays a formatted header and example Javascript function process HTTP calls
;===========================================
*/

// header
// const header = require('./Weilbacher-header.js');

// console.log(header.display("Andrew", "Weilbacher", "Exercise 1.3"));

// start program

// Variable declaration:

var http = require("http");

function processRequest(req, res) {

var body = "Hello World";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);

// end program