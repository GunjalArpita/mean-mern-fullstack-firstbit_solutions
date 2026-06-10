
// //console.log('Array',Array);
// console.log("**** Finding index,next big number else out of range****")
// function  array(Array,num)
// {
// let bignum =Number.MAX_SAFE_INTEGER;
// index=-1;

// for(let i=0;i<=Array.length;i++) //i=index
//     {
//       if(num==Array[i])   //number present on index i
//          { 
//           index=i;
//            console.log(num,'Present at',i,'index in array')

//             break;
//          }
        
//         // Array.sort((a,b)=>a-b)
//         // console.log(Array,"Sorted Array");
       
//         if(Array[i]>num  && Array[i]<bignum)
//           {
//               bignum=Array[i];
//               console.log(' nextbigger number is',bignum);
          
//           }
//           }
//           if(index !== -1)
//             {
//               return index;
//             }
//        else if(bignum != Number.MAX_SAFE_INTEGER)
//        {
//      return 'bignum';
    
//       }
//       else{
//         return 'out of range';
//       }
//     } 
//     const Array=[5,20,50,100,64,90];
//     console.log(array(Array,63));

const a=[19,23,45,0,40];
const num=400;
let max=0;
for (let x in a)
  {
    if(a[x]===num)
      {
        console.log("number present at index",x);
        break;
      } 
      else if(a[x]>num)
        {
          console.log("greater number is ",a[x]);
          if(max===0)
            {
              max=a[x];
            }
            else if(a[x]<max)
              {
                max=a[x];
                
              }
        }
        
  }








