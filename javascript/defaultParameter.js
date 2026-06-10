//default parameters allows us to specif a default value for a parameter when the function is called.
// if the argument is provided the it overrides the default value.
//using arrow function.

console.log("DEFAULT PARAMETERS");
let z=(a=0,b=0)=>{    //here a=b=0 is default value
 console.log(a+b);
}
z(2,3);  // when we provide a value to the function then it ignore the default value
z(10);  //here only one value is provided so it is assigned to the first parameter.
z();

