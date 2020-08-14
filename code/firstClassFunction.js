/**************************

* Bismillahir Rahmanir Rahim
* Functional JavaScript
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
console.log(print);

// Now we can keep keep greeting function as only a reference in a variable
var firstVar = greeting;
console.log(firstVar('Shakib Al Hasan'));

// Again we can use firstVar as a function 
var secondVar = firstVar;
console.log(secondVar('Mashrafi Bin Mortaza'));


/******************************************
 * 
 * A function can be stored in an array
 * 
 *****************************************/

function greeting2(position) {
    return 'I am the ' + position;
}
//  Here we can pass a function as well as we can traverse a fucntion from an Array; 
var arr = ['Winner or Looser, ', greeting2('Winner')];
console.log(arr);

//  Here we can pass a function from an Array;
arr.push(greeting2);
console.log(arr);


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
    } 
}
console.log(obj);
var x = obj.print();
console.log(x);


/**********************************
 * 
 * We can create function as needed
 * 
 *********************************/

//  Here we are using self invoking function
var sum = 10 + (function(){ return 10 })();
console.log(sum);


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


/************************************************
 * 
 * We can return a function from another function
 * 
 ***********************************************/

 function base(x) {
    return function power(n) {
        var result = 1;
        for (var i=0; i<x; i++) {
            result *= n;
        }
        return result;
    }
 }
var b = base(2);
var p = b(5);
console.log(b);
console.log(p);

 var result = base(2)(5);
 console.log(result);
