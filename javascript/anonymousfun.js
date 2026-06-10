//anonymous function
// An anonymous function is js is a function  that does not have a name.
// it is used as a callback function 
// useful when you need a function only once or
//  for shortterm usage where naming the function is unnecessary.
// eg.1
let x=function ()
{
    console.log("Anonymous function");

}
x();

//eg.2
const sum = function()
{
    const a=5;
    const b=5;
    console.log("Addition =",a+b);
}
sum();
