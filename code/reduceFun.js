/**************************

* Bismillahir Rahmanir Rahim
* Functional JavaScript
* reduce function in JS
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 

**************************/

/***************************************************************************
 * Reduce function is like sort function & it can take three parameter like 
 * foreach, filter, map funciton
  
 **************************************************************************/

//  If we want to sum all the elements of an array, do it bro
var arr = [2, 4, 6, 8, 10, 12, -13];
var sum = 0;

for( var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log('Sum: ' + sum);

// No, we are JS programmer. So we should use reduce funciton.
var arr1 = [2, 4, 6, 8, 10, 12, -13];
var sum1 = arr1.reduce(function(a, b) {
    return a + b;
});
console.log('Sum1: ' + sum1);


// Now I build by own reduce function, Let's go

var arr2 = [2, 4, 6, 8, 10, 12, -13];
var sum2 = 0;
var x;

function myReduce(arr2, cbf) {
    for(var i = 0; i < arr2.length; i++) {
        sum2 = cbf(arr2[i]);
        // console.log(sum2);
    }
    return sum2;
}

var result = myReduce(arr2, function(element) {
    // console.log('element : ' + element + ', sum2: ' + sum2);
    return element + sum2;
});

console.log('Sum2: ' + result);


