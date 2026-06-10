//implicit-
 // explicit-
//1.number
let age:number=30
console.log(age)

//2.unknown datatype-it datatype is not known
let dontknow:unknown


//3.any-not sure then any,typechecking disable.
let notsure:any;
notsure=true
notsure='50'


//array-
let names:string[]=['vghr','vhst','vghfj']
names.push('yrfg')
console.log(names)

//readonly
const data: readonly number[]=[11,22,33,44]
console.log(data)

//tuples-typed array
 let mytuple=[3,'hello',true,55,5]

//destructuring
 const graph:[number,number]=[44,66]
 graph.push(55,11)

 console.log(graph)
 const [x,y]=graph
   console.log(x,y)
   console.log(x)
   console.log(y)


   //object in typescript
   //key:value

   const cars={
    moedl:'series',
    company:'tata',
    color:'blue',
    year:'2005',
    sold:true
   }
   let  phone:{
    model:string,
    compant:string,
    color:string,
    year:number,
    sold:boolean
   }={
    model:'iphone',
    compant:'iphone',
    color:'blue',
    year:2005,
    sold:true
   }

console.log(phone)
   //union -OR
   //save more than 1 datatype.
   let myage:string|number|number[];
   myage=55
   console.log(myage)
   myage='66'
   console.log(myage)
   myage=[22]
   console.log(myage)
   
