// INCLUDE 1
#include 'includes/something-level-depth_1.js';
// INCLUDE 2
#include './includes-level-depth_0.js';
// INCLUDE 3
#include "./includes/more-level-depth_1.js";
// INCLUDE 4
#include'includes/even-more-level-depth_1.js'
//INCLUDE 5
#include '../some-more-level-depth_-1.js'
// INCLUDE 6 with ERROR
#include 'path/to/file/that/does/not/exist.js'
// INCLUDE 7
#include'./includes/deeper/deeep-level-depth_2.js';
// INCLUDE 8
#include '/Users/icke/Documents/extendscript-bundlr/test/src/abs-path-level-depth_-1.js'
//
//
$.writeln('\n-------\ntesting includes');
foo();
test();
more();
evenmore();
