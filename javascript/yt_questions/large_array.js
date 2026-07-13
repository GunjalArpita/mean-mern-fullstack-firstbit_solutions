function large(array)
{
    let max = array[0];
    for(let i=1;i<array.length;i++)
    {
        if(array[i]>max)
        {
            max = array[i]
        }
    }
    return max
}

console.log(large([45,67,89,43,21,5675687]));

