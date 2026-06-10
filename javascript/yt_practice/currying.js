//currying in javascript
//currying is a technique of evaluating a function with multiple arguments, into a sequence of functions with single argument.
//currying is a powerful technique that allows us to create new functions from existing functions, by fixing some of the arguments of the original function.
//currying is also known as partial application, because it allows us to create new functions by partially applying the original function.
//use
//1. to create new functions from existing functions, by fixing some of the arguments of the original function.
//2. to create new functions from existing functions, by partially applying the original function.  


//code-
function add(a,b){         //function with multiple arguments
    return a+b;
}
function curry(fn){          
    return function(a){         
        return function(b){      
            return fn(a,b);     
        }
    }   
}
let curriedAdd = curry(add);         
console.log(curriedAdd(2)(3));
