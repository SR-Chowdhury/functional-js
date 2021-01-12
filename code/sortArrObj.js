/**************************

* Bismillahir Rahmanir Rahim
* Functional JavaScript T-08
* Sort Arry of Object
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 

**************************/

/************************************************
 * We can sort an array with Callback function.
  
 **********************************************/

var arr = [10, 50, 20, 60, 5, 45, 80, 2];
arr.sort();
console.log(arr);
// arr.sort();  Result = 10, 2, 20, 45, 5, 50, 60, 80 [Not Ok] So,
arr.sort(function (a, b) {
    return a - b;
});
console.log(arr); // 2, 5, 10, 20, 45, 50, 60, 80
// Horrah! we made this in Ascending Form, but we want to Desencending...

arr.sort(function (a, b) {
    return b - a;
});
console.log(arr); // 80, 60, 50, 45, 20, 10, 5, 2


// Another Example

var arr1 = [10, 50, 20, 60, 5, 45, 80, 2];

function sorting(arr1, ascending, descending) {
    ascending(arr1);
    descending(arr1);
}
sorting(arr1, function (args) {
        // console.log(arr1);
        args.sort(function (a, b) {
            return a - b;
        });
        console.log('Ascending order of arr1  : ' + args);
        // Ascending order of arr1  :  2, 5, 10, 20, 45, 50, 60, 80
    },
    function (args) {
        args.sort(function (a, b) {
            return b - a;
        });
        console.log('Descending order of arr1  : ' + args);
        // Descending order of arr1 : 80, 60, 50, 45, 20, 10, 5, 2
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
sortingArrObj(people,
    
    function(obj) {
        obj.sort(function(a, b) {
            return a.age - b.age;
        });
        console.log(obj);
    },

    function(obj) {
        obj.sort(function(a, b) {
            return b.age - a.age;
        });
        console.log(obj);
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


