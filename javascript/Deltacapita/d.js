let array = [1,2,3,2,1,4,5,6];
let dup =[]
for(let i=0;i<array.length;i++)
{
    for(let j=i+1;j<array.length;j++)
    {
        if(array[i]===array[j] && i!==j  && !dup.includes(array[i]))
        {
            dup.push(array[i]);
        }
    }
}
console.log(dup);
