//closure functions
//

//using var-
//in this case, the value of i will be 3 for all the setTimeout functions, because the var keyword is function scoped, and the value of i will be updated in each iteration of the loop, and the setTimeout functions will be executed after the loop has completed, and the value of i will be 3 at that time.

//using let-
//in this case, the value of i will be 0,1,2 for the setTimeout functions, because the let keyword is block scoped, and the value of i will be updated in each iteration of the loop, and the setTimeout functions will be executed after the loop has completed, and the value of i will be 0,1,2 at that time.


function checkVar()
{
    for(var i=0;i<3;i++)
        
    {
        setTimeout(() => {
        console.log(i);
        
    },3000)
}

}


function checkLet()
{
    for(let i=0;i<3;i++)
        
    {
        setTimeout(() => {
        console.log(i);
        
    },3000)
}

}
checkVar()
checkLet()