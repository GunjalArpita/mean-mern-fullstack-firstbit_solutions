function check(array)
{
    let dup = [];
    for(let i=0;i<array.length;i++)
    {
        for(let j=i+1; j<array.length;j++)
        {
            if(array[i] === array[j] && i!==j && !dup.includes(array[i]))
            {
                dup.push(array[i])
            }
        }
    }
    return dup
}

console.log(check([1,2,3,7,4,5,2,3,1,1]));
console.log(check(['abc','pqr','abc','hii','lmn','hii']));

