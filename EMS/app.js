/*
============================================
; Title:  EMS Application
; Author: Andrew Weilbacher
; Date:   16 September 2019
; Description: Demonstrates EJS layouts.
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var Employee = require("./models/employee");
var app = express();
var mongoose = require("mongoose");
var helmet = require("helmet");
var csrf = require("csurf");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

//establish database connections
var mongoDB = "mongodb+srv://Bonobo791:Marines791!@cluster0-rosfe.mongodb.net/admin?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function () {
    console.log("Application connected to mLab MongoDB")
});

//setting csrf protection 
var csrfProtection = csrf({
    cookie: true
});



//setting view engine
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', process.env.PORT || 8080);

//use statements
app.use(logger("short"));
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(cookieParser());
app.use(csrfProtection);
app.use(function (request, response, next) {
    var token = request.csrfToken();
    response.cookie("XSRF-TOKEN", token);
    response.locals.csrfToken = token;
    next();
});
app.use(express.static(__dirname + '/public'));
app.use(helmet.xssFilter());





//routing
//Rendering Index/Home page
app.get("/", function (req, res) {
    Employee.find({}, function (err, employees) {
        if (err) {
            console.log(err)
            throw err;
        } else {
            console.log(employees);
            res.render('index', {
                title: 'EMS|Home',
                employees: employees
            })
        }
    });
});
//rendering new , user can creat new employee 
app.get("/new", function (request, response) {
    response.render("new", {
        title: 'EMS|New'
    });
});
//render list where employees are listed
app.get("/list", function (req, res) {
    Employee.find({}, function (error, employees) {
        if (error) throw error;
        res.render("list", {
            title: 'Employee List',
            employee: employees
        })
    })
})
app.post("/process", function (req, res) {
    //get requests data 
    const employeeName = req.body.txtName;
    console.log(employeeName)
    //employee model
    let employee = new Employee({
        name: employeeName
    });
    //save employee
    employee.save(function (err) {
        if (err) {
            console.log(err);
            throw err;
        } else {
            console.log(employeeName + 'saved');
            res.redirect('/')
        }
    });

})
app.get("/view/:queryName", function (req, res) {
   var queryName = req.params['queryName']
    Employee.find({'name': queryName}, function (err, employees) {
        if (err) {
            console.log(err);
    
        } else {
            console.log(employees)
            if (employees.length > 0) {
                res.render("view", {
                    title: 'EMS | View',
                    employee:employees
                  
                })

            } else {
                res.redirect('/')
            }
        }
    })
})





//creating node web server
http.createServer(app).listen(app.get("port"), function() { console.log("Application started on port " + app.get("port")) });