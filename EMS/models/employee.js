/*
============================================
; Title:  employee.js
; Author: Andrew Weilbacher
; Date:   23 September 2019
; Description: File for the Employee database model
;===========================================
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//employee scheema
let EmployeeSchema = new Schema({
    name:{type:String,required:true},
 
})

//exporting model 
module.exports= mongoose.model('Employee', EmployeeSchema)