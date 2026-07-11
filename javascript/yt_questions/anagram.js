function check(str1,str2)
{
     str1 = str1.split('').sort().join("")
     str2 = str2.split('').sort().join("")

     return str1.toUpperCase() === str2.toUpperCase()
}

console.log(check("listen","silent"));
console.log(check("hii","hello"));
console.log(check("yes","YES"));


