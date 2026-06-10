//deleting array element
//1. deleting element and store it in another array.
const Array=[1,2,3,4,5,6,7,8];
console.log("Array before deleting element",Array);
let deletenum=8;
let result=[];
for(let i=0;i<Array.length;i++)
    {
        if(deletenum!=Array[i])
           {
             result.push(Array[i]);
           }
    }
console.log("using push method, result array after deleting element=",result)


//2.store deleted element in a newarr and remaining array in res .
const A=[1,2,3,4,5,6,7,8];
//console.log("Array before deleting element",A);
let deleten=8;
let newarr=[];
let res=[];
for(let i=0;i<A.length;i++)
    {
        if(deleten==A[i])
           {
             newarr.push(A[i]);
           }
        else
        {
         res.push(A[i])
      
        }
    }
console.log(" result array after deleting element=",res)
console.log("  deleted element is=",newarr)


//3.splice method=changing content of array by removing  existing elements or adding new elements in place
// const Array2=[1,2,3,4,5,6,7,8];
// let index=2;  //index delete element.
// if(index>-1)
//     {
//         Array2.splice(index,1);
//     }
//     console.log("using splice deleting element of an array",Array2);

//4.filter
// let Array3=[1,2,3,4,5,6,7,8];
// let remove=3;
// Array3=Array3.filter(item=>item!==remove);
// console.log("using filter method deleting element=",Array3);
