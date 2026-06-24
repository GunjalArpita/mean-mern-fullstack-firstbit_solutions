//prime number

function prime(n)
{
    if(n<=1)
    {
        return "not prime";
    }
    for(let i=2;i<n/2;i++)
    {
        if(n%i==0)
        {
            return "not prime"
        }
    }
    return "prime"
}
console.log(prime(6));
