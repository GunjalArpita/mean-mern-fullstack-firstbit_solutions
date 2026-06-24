// function reversed(str)
// {
//     return str.split('').reverse().join('')
// }
// console.log(reversed("Arpita"));


let str = "Arpita"
let res = " "
for(let i=str.length-1;i>=0;i--)     //6  5 
{     
     res = res + str[i]
}
console.log(res);
