let array = [7,6,5,4,3,2,1,2,3,4,5];
console.log(array.sort());

let strArray = ["e","b","c","d","e"];
console.log(strArray.sort());

for(let i=0;i<array.length;i++)
{
    for(let j=0;j<array.length;j++)
    {
        if(array[i]<array[j])
        {
            temp=array[i];
            array[i]=array[j];
            array[j]=temp
        }
    }
}
console.log("sorted array ", array);

