// Arrow function is having an shorter syantax compared to regular functions.
// they do not have their own 'this' contex.

// eg.1

const sum =(a,b)=>a+b;  //function keyword and function_name is absent

    console.log("addition",(sum(2,3)));

// eg .2

const square =x => x*x;
console.log( "square of number ",square(4));

//eg .3   with multiple lines

const add=(a,b)=>
    {
        const result=a+b;
        return result;
    }
console.log("Addition", add(5,5));


//eg.4  self try as a simple function.
const mult =()=>
    {
       const i=4;
       const j=5;
       console.log("MULTIPLICATION",i*j);    
    }
mult();
