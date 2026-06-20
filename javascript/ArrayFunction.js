//1.length
let fruits=['mango','apple','orange','grapes','watermelon'];
   for(let i=0;i < fruits.length;i=i+1)
    {
        console.log(fruits[i]);
    }
    
//2. push operation -insert -- first in last out ,push element at last
    let nos=[];
    nos.push(10);//0
    nos.push(20);//1
    console.log("push elements=" , nos); 
//3.pop from last
    nos.pop();
    nos.pop();
    console.log("pop elements=",nos);  

//4.multidimension-2D array
let colors=['red','green','blue','orange','black'];
const num=[1,2,3,4];
colors.push(num);
console.log(colors);
console.log(colors[1][2]);//returning element of specific index

//5.tostring function.--convert array into string.keyword='toString'
let color3=['pink','gray','brown','white','blue'];
console.log(color3.toString());

//6.includes-determine whether an array includes a certain value among its entries,returninng 'true','false'
let arr5=[1,2,3,4,5];
let includetwo=arr5.includes(2);
console.log(includetwo)

//7.reverse-reverse order of the elements in array.keyword='reverse'
let company=['Apple','Amazon','Microsoft','Facebook','Netflix'];
console.log(company);
company.reverse();
console.log(company);

//6.shift-remove first element from an array and return that element.changes length of array.keyword='shift'
let names=['Sneha','shreya','Vaishnavi','Dhananjay'];
let shiftelement=names.shift();
console.log(names);
console.log(shiftelement);

//7.unshift-add at starting-add one more element to the beginning  of an array.modify oroginal array & returns new length  of array
let objects=['Pen','Pencil','Book','Eraser','Sharpner','Scale'];
let unshiftelement=objects.unshift('Charger');
console.log(objects);
console.log(unshiftelement);

//8.findIndex-used to find index of first element in an array .return index of element if found and -1 if no element found.
let Animals=['Cat','Dog','Cow','Tiger','lion','Elephant','Zebra','Camel'];
console.log(Animals);
let index = Animals.findIndex(function(Animal){
return Animal =='Tiger' ;
});
console.log(index);

//9.map-create a new array with the results of calling a provided function on every element.
let squares=[1,2,3,4,5];
let squarenumber = squares.map(function(squares)
{
    return squares*squares;
});
console.log(squares);
console.log(squarenumber);

//10.find-return value of first element in array. return undefined if no element satisfies the testing function.
let NUMBER=[2,4,6,8,10];
let findnumber=NUMBER.find(function(num)
{
    return num>8;
}) ;
console.log(findnumber);

//11.indexof-find first occurrence of a specified value in array.if value not found retu -1.
let  result=['Firstclass','pass','fail'];
console.log(result)
let indexoffail=result.indexOf("fail");
console.log(indexoffail);
let indexofpass=result.indexOf("pass");
console.log(indexofpass);


//12.*filter-creates a new array  with all elements that pass the test implemented by provided functon.
const divisiblenum=[1,2,3,4,5,6,7,8,9,10];
const evennum = divisiblenum.filter(function(divisiblenumber)
{
    return divisiblenumber %2===0;
});
console.log(evennum);

//13.concat-merges two or more arrays and returns a new array.
let arr1=[11,22];
let arr2=[33,44];
let concatarray=arr1.concat(arr2);
console.log(concatarray);
 
//14.slice-returns shallow copy of *portion of array into new array object selected from start to end *(end not included).
//not working
let Arrays =[55,66,77,88,99];
let sliceArray=Arrays.slice(1,3); // start_index ,end_index ,returns selected array.
console.log(Arrays);
console.log(sliceArray);

//15.splice-adds/removes items to/from an array and returns the removed items.
let City=['Pune','Nagpur','Mumbai','Nashik'];
City.splice(1,2);//remove 2 elements from 1 index
City.splice(1,0,'nagpur','nashik');  //add nagpur and nashik in 1 index.
console.log(City);

//16.forEach-executes a provided function once for each array element.
let arr3=[1,2,3];
arr3.forEach(element=>console.log(element));

//17.*reduce-executes a reducer function on each element of the array,resulting in a single output value.
let  arr4=[1,2,3,4];
let sum=arr4.reduce((acc,current)=>acc+current,0);
console.log(sum);

//18.sort-sort the array.
let values=[11,88,22,77,33,99,66,44,55];
values.sort();
console.log(values);

//19.join-join all elements in single array into single string.seprated by seprator string,default seprator is (,)
let fruit=['Apple','Mango','Cherry'];
let joinarray=fruit.join();
let joinarray2=fruit.join("_");
let joinarray3=fruit.join("");
console.log(joinarray);
console.log(joinarray2);
console.log(joinarray3);






