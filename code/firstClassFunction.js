/**************************

* Bismillahir Rahmanir Rahim
* Functional JavaScript T-01
* First Class Function
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 

**************************/

/******************************************
 * 
 * A function can be stored in a variable
 * 
 *****************************************/

function greeting(name) {
    return 'Hello, ' + name;
}
var print = greeting("Shihan Chowdhury");
console.log(print); // Hello, Shihan Chowdhury

// Now we can keep keep greeting function as only a reference in a variable
var firstVar = greeting;
console.log(firstVar('Shakib Al Hasan')); // Hello, Shakib Al Hasan

// Again we can use firstVar as a function 
var secondVar = firstVar;
console.log(secondVar('Mashrafi Bin Mortaza')); // Hello, Mashrafi Bin Mortaza


/******************************************
 * 
 * A function can be stored in an array
 * 
 *****************************************/

function greeting2(position) {
    return 'I am the ' + position;
}

var arr1 = [1, 2, 3];
console.log(arr1); // [1, 2, 3]

var arr2 = [arr1, greeting2('Winner')];
console.log(arr2); // [ [1, 2, 3], 'I am the winner']

//  Here we can pass a function as well as we can traverse a fucntion from an Array; 
var arr3 = ['Winner or Looser, ', greeting2,  greeting2('Winner')];
console.log(arr3); // Winner or Looser, function , I am the winner

//  Here we can pass a function from an Array;
arr3.push(greeting2('Looser'));
console.log(arr3); // Winner or Looser, Function, I am the winner, I am the Looser




/*********************************************************
 * 
 * A function can be stored as an object field or porperty
 * 
 ********************************************************/

function greeting3(name) {
    return 'hello, ' +  name;
}
var obj = {
    age: '28',
    health: 'good',
    function: greeting3('Shihan'),
    print: function() {
        return this.age + ' , ' + this.health;
    },
    print1: function(name){
        return 'Hello, ' + name;
    } 
}

console.log(obj); 
// age: 28, health: good, function: hello Shihan, print: function
var x = obj.print();
console.log(x); // 28, good
console.log(obj.print1('Shihan')); // Hello, Shihan



/**********************************
 * 
 * We can create function as needed
 * 
 *********************************/

//  Here we are using self invoking function
var sum = 10 + (function(){ return 10 })();
console.log(sum); // 20


/***************************************
 * 
 * We can pass a function as an argument
 * 
 **************************************/

function greeting4(name) {
    return 'hello, ' + name;
}

function greeting4v2(input, gree4Fun) {
    return gree4Fun(input);
    // console.log(gree4Fun(input));
}
console.log(greeting4v2('Shihan', greeting4));
// hello, Shihan


/************************************************
 * 
 * We can return a function from another function
 * 
 ***********************************************/

 function power(x) {
    return function base(n) {
        var result = 1;
        for (var i=0; i<x; i++) {
            result *= n;
        }
        return result;
    }
 }
var p = power(2);
var b = p(5);
console.log(p); // Function: base
console.log(b); // 25

 var result = power(3)(10);
 console.log(result); // 1000
