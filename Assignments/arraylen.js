console.log("finding length of array")
console.log("**** first method ****")
const arr=[1,2,3,4,5,6,7,1,1,1,1,1,1];
let cnt=0;
for(let index in arr)
  {
    cnt++;
  }
console.log('length of array without using inbuild function =',cnt)


console.log("**** second method *****")
const Arr=[1,2,3,4,5,6,7,8]
 let count=0;
 for(let i=0;i<Arr.length;i++)
  {
    count++;
  }
console.log("Array length using inbuild function",count);