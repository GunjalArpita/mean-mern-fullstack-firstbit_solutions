

function OneTime()
{
    console.log("This function will be called only once");
    OneTime = function()
    {
        console.log("This function will not be called again");
    }

}
OneTime();
OneTime();  


//code-explanation
//In the above code, we have defined a function called OneTime, which will be called only once. When we call the OneTime function for the first time, it will print "This function will be called only once". After that, we are reassigning the OneTime function to a new function that will print "This function will not be called again". So, when we call the OneTime function for the second time, it will print "This function will not be called again". This is a common pattern used to create functions that can only be called once, and it is often used in situations where we want to initialize something only once, or to create a singleton object.

//another example


function add(a,b)
{
    console.log("The sum of " +a+ " and " +b+ " is " + (a+b));  
    add = function()
    {
        console.log("This function will not be called again");
    }
}
add(2,3);
add(4,5);


let view;
function demo() {
    let count = 0;

    return function() {
        if(count > 0)  {
            console.log("You have already viewed this video");
        }
        else{
            view = "This is a video about closures in JavaScript";
            console.log("subscribe to",view);
            count++;
            
        }
    
}
    }

    let check = demo();
    check();

