/****************************************

* Bismillahir Rahmanir Rahim
* Functional JavaScript
* Closure in JS
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 

****************************************/

/*************************************************************************
 * 
 * A closure is a feature in JS where an inner funciton has access to the
 * outer funciton's variables or global variables.
 * This approach has doney by Debugger for chrome tools (Extension);
 * Note: when we are going to debugg we must have stop Quokka extension
 * 
 ************************************************************************/

//  Example 1
var globalVar = 'hello';
function outer() {
    var outVar = 'Shihan';
    function inner() {
        var innerVar = 'How are you?';
        console.log(globalVar + ' ' + outVar + ' ' + innerVar);
    }
    return inner();
}
outer();

// Example 2 with anonymous function 

function greeting(args) {
    return function(val) {
        console.log( args + ' ' + val);
    }
}
var x = greeting('two');
// Above this x has no closure
x('three');
// but this x has a closure.
