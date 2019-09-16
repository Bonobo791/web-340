const header = require('../Weilbacher-header.js')

console.log(header.display("Andrew", "Weilbacher", "Exercise 6.3"));
console.log('');

var express = require("express");

var http = require("http");


var logger = require("morgan")
var path = require("path");

var app = express();

var mongoose = require("mongoose");

var mongoDB = "mongodb+srv://Bonobo791:Marines791!@cluster0-rosfe.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoDB,{
   useNewUrlParser: true

});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on("error", console.error.bind(console,"MongoDB connected error:"));
db.once('open',function(){
  console.log("Application connected to mLab MongoDB instance");
})

// application
var app = express();
app.use(logger("short"));

// create server
http.createServer(app).listen(8080, function() {
  console.log("Application connected to port 8080!");
});