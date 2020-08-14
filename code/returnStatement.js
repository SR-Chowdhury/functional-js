/**************************

* Bismillahir Rahmanir Rahim
* Functional JavaScript
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

function example() {
    return 10*34+1;
}
console.log(example());

function example1() {
    return (
        10*34+1
    );
}
var outputexample1 = example1();
outputexample1;