//eg.1
let x=100;
console.log(x);
setTimeout(()=>
    {
        console.log('hello');

    },3000)
;
console.log("demo");


//eg.2
let id=setInterval(()=>
{
    console.log("hi");

},2000);
setTimeout(()=>
{
    clearInterval(id);
},10000);