//**********typecasting***********
//***********object***********
var student = {
    student_name: {
        firstname: 'Arpita',
        middlename: 'Bharat',
        lastname: 'Gunjal',
    },
    age: 20,
    email: "gunjal@gamil.com",
    contact: 1122334455,
    education: {
        college_name: 'Sangamner college',
        department: 'computer science',
        year: 'Third Year',
    },
    address1: {
        state: 'Maharashtra',
        city: 'Sanganer',
        zipcode: 422605,
    },
};
//************Accessing the object***********
//1.first method
console.log("METHOD FIRST");
console.log(student.age);
console.log(student.student_name);
console.log(student.address1.zipcode);
//2.second method-as a array.
console.log("SECOND METHOD");
console.log(student['student_name']['lastname']);
console.log(student["email"]);
//3.third method-Destructuring
//const{firstname,middlename,lastname}=student_name
console.log("THITD METHOD");
var student_name = student.student_name, email = student.email, contact = student.contact, education = student.education, address1 = student.address1;
var firstname = student_name.firstname, middlename = student_name.middlename, lastname = student_name.lastname;
console.log(student_name);
var college_name = education.college_name, department = education.department, year = education.year;
console.log(education);
console.log(student_name, email, contact, education, address1);
