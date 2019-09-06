var express = require("express");

var http = require("http");

var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

var p = [

  "Andrew",

  "Paola",

  "Philip",

  "Angela"

];


app.get("/", function(request, response) {

    response.render("index", {

       people: p

    })

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});