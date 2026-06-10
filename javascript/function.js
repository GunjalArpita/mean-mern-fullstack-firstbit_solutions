//function is a block of code which performs a speciic task.
// refer lab03.js for types of functions.

//************passing a function as parameter.here function itseft is pass as parameter.*******************

function mult(a,b){       //this is 1st function.having logic of mult.
    console.log("multiplication ="+(a*b));

}
function process(f)  //this is second function,having parameter/function f .
{
    f(5,4);   //values pass to the f.
}

process(mult);  //here we call the process function which call the mult function.

//*********returning function as return value.

function getFunc()
{
    function t()
    {
        console.log("hello");
    }
    return t;
}
 const k=getFunc();
  k();