//simple for loop
for(let i=0;i<=5;i++)
    {
        console.log(i);
    }

//for in-ised to print index
    let Array=['Arpita','sonali','Dipali','Aditi'];
    for  (let x in Array){
        console.log(x);
    }

//for of -used to  iterator all value of array ,string
let city='nagpur';
for(let c of city)
    {
        console.log(c);
    }

let name=['Arpita','sonali','Dipali','Aditi'];
for(let n of name)
    {
        console.log("name =",n);
    }


    //js object   for-in loop
    let stud={
        name:"Arpita",
        roll:1,
        marks:94,
        city:"Sangamner"
    }
    for (let p in stud){
        console.log( p +"="+stud[p]);
    }