/**************************

* Bismillahir Rahmanir Rahim
* Functional JavaScript
* Higher Order Function
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 

**************************/

/**********************************************************************************
 * 
 * Higher Order Function: A pure function that can take it's argument like fucntion
 * 
 *********************************************************************************/

 function greeting() {
     return function(name) {
        //  This is call anonymous function because of we are not given any name of this function
         return 'Hello, ' + name;
     }
 }
 var x = greeting();
 var y = x('Shihan');
 y;
 var z = x('Chowdhury');
 z;


//  Aonther method
var result = greeting()('Shihan Chowdhury');
result;
console.log(result);


// We can also use Higher Order function with array traversing

var arr = [1, 5, 7, 9, 2];

// Mannual Method | Method 1
function cbf(element) {
    console.log(element);
}
arr.forEach(cbf);

// Smart Method | Method 2
arr.forEach(function(element) {
    console.log(element);
});

