//arrow function
const a = (a,b) =>  console.log(a+b); //parameter ,rest parameter
a(3,5)                                //argument , spread operatior
//8


//map function
var arr = [1,2,3,4,5]
const mapRes = arr.map((nums,i,array) => {return nums+1});
console.log(mapRes);
//[2,3,4,5,6]


//filter function
const filterRes = arr.filter((nums,i,array) => {return nums>4})
console.log(filterRes);
//[5]

//reduce function
const reduceRes = arr.reduce((accum, current, i, array) => {return current+accum})
console.log(reduceRes);
//3