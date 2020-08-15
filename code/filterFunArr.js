/**************************

* Bismillahir Rahmanir Rahim
* Functional JavaScript
* filter function in JS
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 

**************************/

/***************************************************************************
 * A filter Function can take three parameter, 1. element 2. index 3. array
  
 **************************************************************************/

//  Finding odd number from an array we are now using traditional Way.
var arr = [2, 4, 6, 5, 3, 1, 8];
var store = [];
for(var i=0; i<arr.length; i++) {
    if(arr[i]%2==1) {
        store.push(arr[i]);
    }
}
console.log(store);

// But bro we are js programmer we should have use advance method
var arr1 = [2, 4, 6, 5, 3, 1, 8];
var store1 = arr1.filter(function(element) {
    return element %2 == 1;
});
var store2 = arr1.filter(function(element) {
    return element %2 == 0;
});
store1;
store2;


// Now we can create this filter function by our own using callback, here we go..

var arr2 = [2, 4, 6, 5, 3, 1, 8];
function myFilter(arr, cbf) {
    var store = [];
    for(var i=0; i<arr.length; i++) {
        if(cbf(arr[i])) {
            store.push(arr[i]);
        }
    }
    return store;
}
var odd_result = myFilter(arr2, function(element) {
    return element % 2 == 1;
});
var even_result = myFilter(arr2, function(element) {
    return element % 2 == 0;
});
console.log('MyFiltered Odd data: ' + odd_result);
console.log('MyFiltered Even data: ' + even_result);