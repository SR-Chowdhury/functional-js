/**************************

* Bismillahir Rahmanir Rahim
* Functional JavaScript T-11
* map function in JS
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 

**************************/

/***************************************************************************
 * Map Function can take three parameter, 1. element 2. index 3. array
  
 **************************************************************************/

 var arr = [2, 4, 6, 8, 10, 12];
//  We want to add three with each arr element, so lets go
var newArr = [];
for(var i = 0; i < arr.length; i++ ) {
    newArr.push(arr[i] + 3);
}
console.log('New array: ' + newArr);
// New array: 5, 7, 9, 11, 13, 15


// But we are JS programmer we should have minimized the code. So don't waste time bro
var arr1 = [2, 4, 6, 8, 10, 12];
var newArr1 = arr1.map(function(element) {
    return element + 2;
});
console.log('New array1: ' + newArr1);
// New array1: 4, 6, 8, 10, 12, 14

// Now we will create our own map funciton.
var arr2 = [2, 4, 6, 8, 10, 12];
var newArr2 = [];

function myMap(arr2, cbf) {
    for( var i = 0; i < arr2.length; i++) {
        newArr2.push(cbf(arr2[i]));
    }
    return newArr2;
}

var result = myMap(arr2, function(obj) {
    return obj + 2;
});
console.log(result);
// 4, 6, 8, 10, 12, 14





