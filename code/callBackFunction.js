/**************************

* Bismillahir Rahmanir Rahim
* Functional JavaScript T-05
* Call Back Function
* Author : Shihan Chowdhury
* Thanks to - Twinkle Cats 

**************************/

/******************************************************************************************
 * 
 * Call Back Function: It has two parts one is constant, another is dynamic (name, func) {}
 * 
 *****************************************************************************************/

 // Abstract Function | Hard scope | if you don't want to use console.log() for several times.
function print(args) {
    console.log(args);
}

 function greeting(name) {
     print(name);
     print('Shihan Chowdhury.');
 }
 greeting('hello'); // hello Shihan Chowdhury
 greeting('How are you?'); // How are you Shihan Chowdhury

 /************************************************
 * 
 * But we are js programmer so here we should use 'call back function'
 * Method 1: if we declared function before.
 * 
 **********************************************/

function print1(args) {
    console.log(args); // shihan
}
function greeting1(name, callBackFunction) {
    callBackFunction(name);
}
// Here we just send reference of the 'print1' funciton. not call the function
greeting1('shihan', print1);

 /************************************************
 * 
 * But we are js programmer so here we should use 'call back function'
 * Method 2: We can create an anonymous function in the parameter.
 * 
 **********************************************/

function greeting3(name, cbf) {
    // Here (name = static, cbf = dynamic)
    cbf(name);
}
greeting3('Shihan', function(name) {
    console.log('Hello ' + name); // Hello Shihan
});
greeting3('Chowdhury', function(name){
    console.log('hello, ' + name); // hello Chowdhury
});
greeting3('Explore', function(name) {
    console.log(name + ': Lenght(' + name.length + ')');
    // Explore: Lenght(7)
});

/****************************************/

var obj = {
    Name: 'Shihan Chowdhury',
    Age: '19',
    Email: 'hackedgdown@gmail.com'
};

function greeting4(obj, cbf) {
    console.log('Hello ' + obj.Name); // Hello Shihan Chowdhury
    if(obj.Age>18) {
        cbf(obj.Email);
    }
    else {
        console.log('You are under Age bro....');
    }
}
greeting4(obj, function(email) {
    console.log('An Email has sent to ' + email);
});

/*****************************************/

// Now we create two call back function 
function greeting5(args, cbf1, cbf2) {
    console.log('hello, ' + args); // hello, Shihan
    cbf1(args);
    cbf2(args);
}
greeting5('Shihan', function(args){
    var data = args.toUpperCase();
    console.log('Uppercase of ' + args + ' is: ' + data);
    // Uppercase of Shihan is : SHIHAN
},
    function(args) {
        var data = args.toLowerCase();
        console.log('Lowercase of ' + args + ' is: ' + data);
        // lowercase of Shihan is: shihan
        console.log('And the lenght of '+args + ' is = ' + data.length);
        // And the length of Shihan is = 6
    }
);