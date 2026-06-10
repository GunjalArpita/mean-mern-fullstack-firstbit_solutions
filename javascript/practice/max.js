let arr = [1,456,234,890,10000,4,2,7,45]
let max = arr[0];
for(let i=0;i<arr.length;i++)
{
    
    if(arr[i]>max)
    {
        max = arr[i]
    }

}
console.log(max);
