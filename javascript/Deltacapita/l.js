function linearSearch(array,target)
{
    for(let i=0;i<array.length;i++)
    {
        if(array[i]===target)
        {
            return i
        }
       
    }
    return -1;
}
console.log( linearSearch([5,4,32,45,6],4));
  