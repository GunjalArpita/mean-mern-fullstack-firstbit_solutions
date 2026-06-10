let array=[1,2,3,3,4,4,4,5,6,7,5,6,7];
console.log("Original array");
console.log(array);
console.log("sorted array");
console.log(array.sort());
console.log("duplicate element");
let dup=[];
for(let i=0;i<array.length;i++)
{
   
           if(array[i]===array[i+1])
           {
              if(! dup.includes(array[i]))
              {
                dup.push(array[i]);
              }
           }
           
}
console.log(dup);
