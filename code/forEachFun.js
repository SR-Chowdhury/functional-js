/**************************

* Bismillahir Rahmanir Rahim
* Functional JavaScript
* foreach function in JS
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 

**************************/

/***************************************************************************
 * A forEach Function can take three parameter, 1. element 2. index 3. array
  
 **************************************************************************/

 var arr = [2, 4, 6, 4, 2];
 
 arr.forEach(function(element, Index, arr) {
     console.log('Element: ' + element + '; Index : ' + Index + '; full form of array: ' + arr);
 });

//  Now we build our own forEach function using Callback function

var arr1 = [2, 4, 6, 4, 2];

function loop(arr1, cbf1, cbf2) {
    for(var i=0; i<arr1.length; i++) {
        cbf1(arr1[i], i, arr1);
        cbf2(arr1[i]);
    }
}
loop(arr1, function(obj, index, array) {
    console.log('Element: ' + obj + '; Index : ' + index + '; full form of array: ' + array);
},
    function(args) {
        console.log(args);
    }
);