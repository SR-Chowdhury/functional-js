/****************************************

* Bismillahir Rahmanir Rahim
* Functional JavaScript T-07
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
 * Besides we can find closure using jsfiddle.net
 * 
 ************************************************************************/

//  Example 1
var globalVar = 'hello';
function outer() {
    var outVar = 'Shihan';
    function inner() {
        var innerVar = 'How are you?';
        console.log(globalVar + ' ' + outVar + ' ' + innerVar);
        // hello Shihan How are you?
    }
    return inner();
}
// console.dir(outer);
outer();


// Example 2 with anonymous function 

function greeting(args) {
    return function(val) {
        console.log( args + ' ' + val); // Mr. Shihan
    }
}
var x = greeting('Mr.');
// Above this x has no closure; but args = Mr. is Gloval for greeting-> anonymous function
x('Shihan');
// but this x has a closure (Mr.)
