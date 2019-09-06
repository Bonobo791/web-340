var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

var emp1 = [
    "John Turner",
    "45",
    "Director"
];

var emp2 = [
    "Betty Smith",
    "32",
    "Manager"
];

var emp3 = [
    "Mike Jones",
    "25",
    "Analyst"
]

app.get("/", function(request, response){
    response.render("index", {
        title: "Home page"
    });
});

app.get("/list", function(request, response) {
    response.render("list", {
        title: "Employee List",
        Employee1: emp1,
        Employee2: emp2,
        Employee3: emp3
    });
});


http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});