/****************************************

* Bismillahir Rahmanir Rahim
* Functional JavaScript T-06
* Return a function from another function
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 

****************************************/

/*************************************************************************
 * 
 * A function is a vaule so we can return this value form another function
 * 
 ************************************************************************/


 function outer() {
     console.log('I am outer function'); // I am outer function
     function inner() {
         console.log('I am inner function'); // I am inner function
     }
     return inner();
 }
 outer();

//  OR 

function outer1() {
    console.log('I am outer function'); // I am outer function
    function inner1() {
        console.log('I am inner function'); // I am inner function
    }
    return inner1;
}
var result = outer1();
result();

// same code by using anonymous funciton

function outer2() {
    console.log('I am outer function'); // I am outer function
    return function() {
        console.log('I am inner function'); // I am inner function
    }
}
var result1 = outer2();
// result1(); It also can be use.
result1();



/******************************************************/

function outer3(msg) {
    function inner3(args) {
        console.log(msg + ', ' + args);
    }
    return inner3;
}
var res = outer3('Hello');
var res1 = outer3('How are you');
res('Shihan'); // Hello, Shihan
res1('Shihan?'); // How are you, Shihan?

// OR

function outer4(msg) {
    function inner4(args) {
        return msg + ', ' + args;
    }
    return inner4;
}
outer4('Shihan')('Chowhdury');
// Shihan, Chowdhury

// Now with anonymous function
function outer5(msg) {
    return function(args) {
        console.log(msg + ', ' + args);
    }
}
outer5('Shihan')('Chowhdury'); // Shihan, Chowdhury