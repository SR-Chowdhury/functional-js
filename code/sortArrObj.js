/**************************

* Bismillahir Rahmanir Rahim
* Functional JavaScript
* Sort Arry of Object
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 

**************************/

/************************************************
 * We can sort an array with Callback function.
  
 **********************************************/

var arr = [10, 50, 20, 60, 5, 45, 80, 2];
arr.sort();
arr;
// arr.sort();  Result = 10, 2, 45, 5, 50, 60, 80 [Not Ok] So,
arr.sort(function (a, b) {
    return a-b;
});
arr;
// Horrah! we made this in Ascending Form, but we want to Desencending...

// Another Example

var arr1 = [10, 50, 20, 60, 5, 45, 80, 2];

function sorting(arr1, ascending, descending) {
    ascending(arr1);
    descending(arr1);
}
sorting(arr1, function (args) {
        console.log(arr1);
        args.sort(function (a, b) {
            return a - b;
        });
        console.log('Ascending order of arr1  : ' + args);
    },
    function (args) {
        args.sort(function (a, b) {
            return b - a;
        });
        console.log('Descending order of arr1  : ' + args);
    }
);

// Now we are going to sort an array object; here people is an objected array
var people = [
    {name: 'Shihan', age: 28},
    {name: 'Amitavo', age: 41},
    {name: 'Tuhin', age: 38},
    {name: 'Hasan', age: 26},
    {name: 'Tanim', age: 30},
    {name: 'Monju', age: 28},
    {name: 'Afzol', age: 30}
]
people.sort();
console.log(people);

function sortingArrObj(obj, cbf1, cbf2, cbf3, cbf4) {
    cbf1(obj);
    cbf2(obj);
    cbf3(obj);
    cbf4(obj);
}
sortingArrObj(people, function(obj) {
    obj.sort(function(a, b) {
        return a.age - b.age;
    });
    console.log('Ascending Order of poeple array: ' + obj);
},
    function(obj) {
        obj.sort(function(a, b) {
            return b.age - a.age;
        });
        console.log('Descending Order of poeple array: ' + obj);
    },
    // Now soring by object name (Ascending Order)
    function(obj) {
        obj.sort(function(a, b) {
            if(a.name > b.name) {
                return 1;
            }
            else if (a.name < b.name) {
                return -1;
            }
            else {
                return 0;
            }
        });
        console.log(obj);
    },
    // Now soring by object name (Descending Order)
    function(obj) {
        obj.sort(function(a, b) {
            if(b.name > a.name) {
                return 1;
            }
            else if (b.name < a.name) {
                return -1;
            }
            else {
                return 0;
            }
        });
        var x = obj;
        x;
        console.log(obj);
    }
);


