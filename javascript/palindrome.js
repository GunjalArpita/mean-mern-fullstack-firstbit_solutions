let str='hello';
console.log("reversed string");
a=str.split('').reverse().join('');
console.log(a);

console.log("palindrome string");
if(a===str)
{
    console.log("Palindrome");
}
else
{
    console.log("not Palindrome");
}


console.log("duplicate string");
let dup='';
for(let i=0;i<str.length;i++)
{
    if(str[i]===str[i+1])
    {
        if(!dup.includes(str[i]))
        {
            dup=dup+str[i];
        }
    }
}
console.log(dup);


