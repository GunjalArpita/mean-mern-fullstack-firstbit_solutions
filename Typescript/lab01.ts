//
console.log("ASSIGNMENT");

//1.Declaration in ts
let value:string="Arpita";
let num:number=9
let condition:boolean=true
console.log(value,num,condition)

//2.object-Declaration

let object:objectModal={
    Name:'Sneha',
    age:20,
    address:{                //3.nested object
        state:'MH',
        city:'Sangamner',
    },
    email:"sneha@gamil.com",
    mobileno:99990000001
}
console.log(object.Name)
console.log(object.address.city)

//3.Accessing object using key/index value.
console.log(object['address'])
console.log(object['address']['city'])

//4.Destructuring-
const{Name,address}=object
const{state,city}=address
console.log(Name,state,city)

//5. datatype casting.
type objectModal={
    Name:string,
    age:number,
    address: addModal,
    email:any,
    mobileno?:number  //6.optional
    //address:{ state:string;city:string}
}
//nested 
type addModal={
    state:string,
    city:string
}

