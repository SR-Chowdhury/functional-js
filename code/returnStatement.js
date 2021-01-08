/**************************

* Bismillahir Rahmanir Rahim
* Functional JavaScript T-03
* Return Statement
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 

**************************/

/************************************************
 * 
 * Return Statement in  Function: Retun variable
 * 
 **********************************************/

 function greeting(firstname, lastname, gender) {
     if(gender === 'male') {
         return ('Hello, Mr. '+firstname+' '+lastname);
     }
     else if(gender === 'female') {
        return ('Hello, Mrs. '+firstname+' '+lastname);
     }
 }
 var result = greeting('Shihan', 'Chowdhury', 'male');
 console.log(result);
 // Hello, Mr. Shihan Chowdhury


//  We can also do this return statement by another way
function greeting2(firstname, lastname, gender) {
    var output;
    if(gender === 'male') {
        output = 'Hello, Mr. '+firstname+' '+lastname;
    }
    else if(gender === 'female') {
        output = 'Hello, Mrs. '+firstname+' '+lastname;
    }
    return output;
}
var result = greeting2('Tanzima', 'Chowdhury', 'female');
console.log(result);
// Hello, Mrs. Tanzima Chowdhury

function example() {
    return 10*34+1;
}
console.log(example());
// 341

// Same thing in a different way
function example1() {
    return (
        10*34+1
    );
}
var outputexample1 = example1();
outputexample1; //341


/************************************************
 * 
 * Return Statement in  Function: Retun Object
 * 
 **********************************************/

 function greeting3() {
     return {
         name: 'Shihan',
         skill: ['Java', 'Js'],
         print: function() {
             console.log(this.name, this.skill);
             // Shihan [Java, Js]
         }
     }
 }
 var x = greeting3();
 x.print();

 /************************************************
 * 
 * Return Statement in  Function: Retun Array
 * 
 **********************************************/

 function greeting4() {
     var arr = [1, 2, 3, example1()];
     return arr;
 }
 var result = greeting4();
 console.log(result);
// [ 1, 2, 3, 341]
