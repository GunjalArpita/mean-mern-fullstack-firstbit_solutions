//if and if else
let a=20;
console.log(a);

if(a<10)
    {
        console.log("True");
    }
else{
    console.log("False");   
}
 //else if

 let b=70;
 console.log(b);
 if(b>=0 && b<=35)
    {
        console.log("Fail");
    }
else if( b>=36 && b<=50)
    {
        console.log("pass");
    }
else if( b>=51 && b<=70)
     {
         console.log("Distinction");
    }
else if( b>=71 && b<=100)
    {
        console.log("First class");
    }
else{
    console.log("Invalid Marks!");
}