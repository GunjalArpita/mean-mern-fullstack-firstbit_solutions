let n=5
fact=1
if(n<=0)
{
    console.log("factorial of negative number is not defined");
    
}
else
{
    for(let i=1;i<=n;i++)
{
    fact=fact*i
}
console.log("factirial of number is => "+fact)
}


//using while loop

let num=3
let f=1
i=1
while(i<=num)
{
    f=f*i
    i++
}
console.log(f);
