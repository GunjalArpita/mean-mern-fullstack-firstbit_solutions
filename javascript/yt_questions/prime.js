function prime(n)
{
    if(n<=1)
    {
        return "NOT A PRIME NUMBER"
    }
    for(let i = 2; i <= n/2; i++)
    {
        if(n%i == 0)
        {
            return "NOT PRIME NUMBER";

        }
    }
    return "PRIME NUMBER"
}

console.log(prime(4));
console.log(prime(5));
console.log(prime(-1));


