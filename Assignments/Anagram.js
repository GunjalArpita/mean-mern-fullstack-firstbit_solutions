let str1='ten';
let str2='net';
//let newstr= console.log(str1.toLowerCase(str1));
// console.log(str2.toLowerCase(str2));
let strnew1=str1.toLowerCase().split('').join(' ');
let strnew2=str2.toLowerCase().split('').reverse().join(' ');
console.log(strnew1);
console.log(strnew2);
if(strnew1==strnew2)
    {
        console.log("anagram")
    }
else
{
    console.log("not anagram")
}