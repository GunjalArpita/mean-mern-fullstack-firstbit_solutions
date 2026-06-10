// classes make easier to create and manage objects.
// define using keyword 'class'
// you create a instance of a class using 'new keyword'


class student{
    constructor(roll,name)
    {
        this.roll=roll;
        this.name=name;
    }
    printdetails()
    {
        console.log("student roll no is "+ this.roll +" and name is "+ this.name);
    }
}
let s1=new student(10,'Arpita');
s1.printdetails();
let s2=new student(11,'Arpit');
s1.printdetails();
