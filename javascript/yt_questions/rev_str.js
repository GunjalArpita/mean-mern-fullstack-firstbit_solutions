function RevStr(str)
{
    // let res = ""
    // for(let i = str.length-1;i>=0;i--)  
    // {
    //     res+=str[i]
    // }
    // return res;

    return str.split("").reverse().join("")
}

console.log(RevStr("ARPITA"));
console.log(RevStr("HII I AM ARPITA"));



