//without parameters and return value.
addition();
function addition()
{
    const a=10;
    const b=5;
    console.log("Addition==",a+b);
}
//with parameters and without return value.
multiplication(10,5);
function multiplication(a,b)
{
    console.log("multiplication==",a*b);
}
//without parameters and with return value.
const sub=subtraction();
console.log("subtraction==",sub);
function subtraction()
{
    const a=10;
    const b=5;
    return a-b;
}
//with parameters and return value.
const div =division(10,5);
console.log("division",div);
function division(a,b)
{
return a/b;
}
