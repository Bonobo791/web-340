/*
============================================
; Title:  fruit.js
; Author: Professor Krasso
; Date:   September 23 2019
; Contributor: Andrew Weilbacher
; Description: Demonstrations how to create a TDD unit test.
;===========================================
*/

var assert = require("assert");

describe("String#split", function() {
  it("should return an array of fruits", function() {
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});