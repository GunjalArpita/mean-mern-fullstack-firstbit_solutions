//**********typecasting***********

type studentModal={
    student_name:nameModal,
    age:number,
    email:any,
    contact?:number,
    education:{college_name:string,department:string,year:number}
    address1:{state:string,city:string,zipcode:number},  //nested typecasting. 
}
type nameModal={   //for student_name
    firstname:string,
    lastname:string,
    middlename:string,
} 

//***********object***********

let student={
    student_name:
    {
        firstname:'Arpita',
        middlename:'Bharat',
        lastname:'Gunjal',
    },
    age:20,
    email:"gunjal@gamil.com",
    contact:1122334455,
    education:
    {
        college_name:'Sangamner college',
        department:'computer science',
        year:'Third Year',
    },
    address1:
    {
        state:'Maharashtra',
        city:'Sanganer',
        zipcode:422605,
    },
}

//************Accessing the object***********

//1.first method
console.log("METHOD FIRST")
console.log(student.age)
console.log(student.student_name)
console.log(student.address1.zipcode)

//2.second method-as a array.
console.log("SECOND METHOD")
console.log(student['student_name']['lastname'])
console.log(student["email"])

//3.third method-Destructuring
//const{firstname,middlename,lastname}=student_name
console.log("THITD METHOD")
const{student_name,email,contact,education,address1}=student
const{firstname,middlename,lastname}=student_name
console.log(student_name)
const{college_name,department,year}=education
console.log(education)
console.log(student_name,email,contact,education,address1)
