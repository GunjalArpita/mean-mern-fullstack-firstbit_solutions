function check(str)
{
    
    let res = str.split("").reverse().join("")
    return str === res
}

console.log(check("madam"));
console.log(check("Madam"));
console.log(check("morning"));


