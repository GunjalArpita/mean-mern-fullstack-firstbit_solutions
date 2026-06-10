

//closure - theory defination
//closure is a function that has access to the parent scope, even after the parent function has closed.
//closure is created when a function is defined inside another function, and the inner function has access to the variables of the outer function.
//closure is a powerful feature of JavaScript that allows us to create private variables and functions, and to create functions that can be used as callbacks or event handlers.
//use- 
//1. to create private variables and functions
//2. to create functions that can be used as callbacks or event handlers
//3. to create functions that can be used as closures

function outer(){
    let count = 0;  
    function inner(){
        count++;
        console.log(count);
    }   
    return inner;
}
let counter = outer();
counter();
counter();
counter();

 