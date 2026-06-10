//
console.log("ASSIGNMENT");
//1.Declaration in ts
var value = "Arpita";
var num = 9;
var condition = true;
console.log(value, num, condition);
//2.object-Declaration
var object = {
    Name: 'Sneha',
    age: 20,
    address: {
        state: 'MH',
        city: 'Sangamner',
    }
};
console.log(object.Name);
console.log(object.address.city);
//3.Accessing object using key/index value.
console.log(object['address']);
console.log(object['address']['city']);
//4.Destructuring-
var Name = object.Name, address = object.address;
var state = address.state, city = address.city;
console.log(Name, state, city);
