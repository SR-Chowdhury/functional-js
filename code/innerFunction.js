/**************************

* Bismillahir Rahmanir Rahim
* Functional JavaScript T-02
* Inner Function
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 

**************************/

/**********************************
 * 
 * Inner Funciton / Nested Function
 * 
 **********************************/

function outer() {
    var a = 10;
    function inner() {
        console.log("I am inner Fucntion bro & i got your global variable: " + a);
        // I am inner Fucntion bro & i got your global variable: 10
    }
    inner();
    console.log("I am outer Function bro.");
}
outer();

function calculator(x, y) {
    //function add(x, y) { Here we can pass argument in this function, but we can use global value
    function add() {
        return x+y;
    }
    function sub() {
        return x-y;
    }
    function mul() {
        return x*y;
    }
    function div() {
        return x/y;
    }
    return add()+sub()+mul()+div();
    //return add(x,y)+sub(x,y)+mul(x,y)+div(x,y);
}
var result = calculator(4,2);
console.log(result); //18