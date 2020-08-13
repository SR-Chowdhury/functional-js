/**************************

* Bismillahir Rahmanir Rahim
* Functional JavaScript
* First Class Function
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 

**************************/

/*** A function can be stored in a variable ***/

function greeting(name){
    return 'Hello, '+ name;
}
var print = greeting("Shihan Chowdhury");
console.log(print);

// Now we can keep keep greeting function as only a reference in a variable
var firstVar = greeting;
console.log(firstVar('Shakib Al Hasan'));

// Again we can use firstVar as a function 
var secondVar = firstVar;
console.log(secondVar('Mashrafi Bin Mortaza'));