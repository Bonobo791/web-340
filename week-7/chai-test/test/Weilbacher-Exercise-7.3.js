/*
============================================
; Title:  fruits.js
; Author: Professor Krasso
; Date:   23 September 2019
; Contributor: Andrew Weilbacher
; Description: Demonstrates how to create a Chai test.
;===========================================
*/

var fruits = require("../Weilbacher-fruits.js");

var chai = require("chai");
var assert = chai.assert;

describe("fruits", function() {
  it("should return an array of fruits", function() {
    var f = fruits("Apple,Orange,Mango");
    assert(Array.isArray(f));
  });
});