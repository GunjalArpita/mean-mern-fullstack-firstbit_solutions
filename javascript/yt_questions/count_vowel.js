function Count(str)
{
    let vowels = ['A' ,'E' ,'I' , 'O', 'U' ,'a' , 'e', 'i', 'o', 'u'];
    var count = 0 ;
    for(let i=0;i<str.length;i++)

    {
        if(vowels.includes(str[i]))
        {
           count+=1;
        }
    }
    return count
}
console.log(Count("hello"));
