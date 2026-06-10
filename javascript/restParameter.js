//allow  to represent an indefinite numbers of arguments as an array.
//denoted by ... (three dots)dots followed b parameter name.

//************syantax-*************

// function function_name(...restParameter_name)
// {

// }
console.log("Rest parameters");
function foo(...nums)
{
    console.log(nums);
}
console.log(foo(10,20));
console.log(foo(2,3,4));


//eg.
function add(...nums)
{
    let sum=0;
    for(let n of nums)
        {
            sum=sum+n;
        }
        return sum;
        
}
console.log (add(10));
console.log (add(10,20));
console.log (add(10,20,10));
console.log (add(10,20,10,10));

//eg.
function demo(a,...nums)
{
    console.log(a);
    console.log(nums);
}
demo(10);
demo(10,20);
demo(10,20,30);
