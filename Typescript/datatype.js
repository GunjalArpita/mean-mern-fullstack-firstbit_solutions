//implicit-
// explicit-
//1.number
var age = 30;
console.log(age);
//2.unknown datatype-it datatype is not known
var dontknow;
//3.any-not sure then any,typechecking disable.
var notsure;
notsure = true;
notsure = '50';
//array-
var names = ['vghr', 'vhst', 'vghfj'];
names.push('yrfg');
console.log(names);
//readonly
var data = [11, 22, 33, 44];
console.log(data);
//tuples-typed array
var mytuple = [3, 'hello', true, 55, 5];
//destructuring
var graph = [44, 66];
graph.push(55, 11);
console.log(graph);
var x = graph[0], y = graph[1];
console.log(x, y);
console.log(x);
console.log(y);
//object in typescript
//key:value
var cars = {
    moedl: 'series',
    company: 'tata',
    color: 'blue',
    year: '2005',
    sold: true
};
var phone = {
    model: 'iphone',
    compant: 'iphone',
    color: 'blue',
    year: 2005,
    sold: true
};
console.log(phone);
//union -OR
//save more than 1 datatype.
var myage;
myage = 55;
console.log(myage);
myage = '66';
console.log(myage);
myage = [22];
console.log(myage);
