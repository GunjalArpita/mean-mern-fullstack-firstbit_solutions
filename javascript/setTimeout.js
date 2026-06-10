//settimeout is a function used to execute a piece of a code after a specified delay.
//**********syantax********** */
//setTimeout(function_name,delay)
//here function_name is a function to be executed after the delay
//delay-the no. o miliseconds to wait before executing the function.


//eg.1
function a()
{
    console.log("hello there!");
}
console.log("I am going to print a message after 4 seconds....");
setTimeout(a,4000);

//eg.2
setTimeout(function()
{
    console.log("hello");
}
,2000);