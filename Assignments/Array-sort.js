const array=[5,4,3,2,1,100,500,0];
let i,j,temp;
for(i=0;i<array.length;i++)   //one by one element accessing 
{
    for(j=0;j<array.length;j++)      //comparision
    {
        if(array[j]>array[j+1])
        {                           
            temp=array[j];      //swaping
            array[j]=array[j+1];
            array[j+1]=temp;
             
        }
    }
}
console.log(array);






//********Quick Sort******/
// let pivot,t,low,high;
// const a=[5,4,3,2,1,100,500,0];
// if(low<high)
//     {
//         pivot=a[low];
//         i=low+1;
//         j=high;
//         while(i<j)
//         {
//             while(pivot>=a[i] && a<=high)
//                 i++;
//             while(pivot<a[j] && j>=low)
//                 j--;
//             if(i<j)
//             {
//                 a=a[i];
//                 a[i]=a[j];
//                 a[j]=t;
//             }
//         }

//     }
//     console.log(a);