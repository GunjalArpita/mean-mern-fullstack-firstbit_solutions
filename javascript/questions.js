//Interview Question -1

//Question-1 factorial of number

//Question-2 prime number

//Question - 3
// const  arr = [5, 20 ,50, 100, 64 ,90 ]
// case 1 : if given num 50 is present in the array then print a message 
// output = 50 is present at index 2 
// case 2 : if given num 55 is not present in the array then print a next bigger no. 
// 55 is not present, next bigger num is 64
// case 3 : if given num is bigger than all array element, then print num is out of range.


 const array = [5,20,50,100,64,90];
// //case 1
let num = 575;
let index = array.indexOf(num);

if(index !== -1){
    console.log(`${num} is present at index ${index}`);
} else {
    console.log(`${num} is not present`);
}
//case2
let nextBigger = array.find((element) => element > num);
if (nextBigger !== undefined) {
    console.log(`${num} is not present, next bigger num is ${nextBigger}`);
} else {
    console.log(`${num} is out of range`);
}

// //case 3
let isOutOfRange = array.every((element) => element < num);
if (isOutOfRange) {
    console.log(`${num} is out of range`);
}


//Question- 4
//const str='arpita gunjal'
//output='a1p2t3 g4n5a6

// const str = 'arpita gunjal';
// let res ='';
//  let c = 1
// for(let i=0;i<str.length;i++)

// {
   
//     if(i%2==0)
//     {
//         res = str[i].replace(c+2);
       
//     }
//     // else if(i===' ')
//     // {

//     // }
// }
// console.log(res);


//Question-5
//length of array without inbuild function


const arrays = [1,2,3,4,5,6,7,8,9,10,11];
console.log(arrays);

let count = 0
for(let i in arrays)
{
     count+=1;
}
console.log("length is " + count);


//Question -6
//sort

const nums = [54,45,23,78,2436,67898];
for(let i=0;i<nums.length;i++)
{
    for(let j=0;j<nums.length;j++)
    {
        if(nums[j]>nums[j+1])
            {
            let temp = nums[j];
            nums[j]=nums[j+1];
            nums[j+1]=temp;
        }
    }
}

console.log(nums);




