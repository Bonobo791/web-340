/*
============================================
; Title:  Weilbacher-Exercise-1.3.js
; Author: Andrew Weilbacher
; Date: 10 August 2019
; Description: Displays a formatted header and example Node.js module
;===========================================
*/

// header
const header = require('./Weilbacher-header.js');

console.log(header.display("Andrew", "Weilbacher", "Exercise 1.3"));

// start program

// example module

// create variable to require url
var url = require("url");

// create variable to parse url
var parsedURL = url.parse("https://www.example.com/profile?name=weilbacher");

// log protocol for parsed url
console.log(parsedURL.protocol);

// log host for parsed url
console.log(parsedURL.host);

// log query for parsed url
console.log(parsedURL.query);

// end program