//***********Question-change a,b,c,d by 1,2,3,4*************/


//only for changing character are once in string
console.log("ASSIGNMENT-3-STRING REPLACE")
let str='a,b,c,d,e,f,g,h,i,j,d,l,m,n';
console.log(str);
console.log(str.replace('a,b,c,d','1,2,3,4'));

//relace all occuring characters
let string='A,B,c,d,e,f,g,h,i,j,d,l,m,n,a,b,c,d';
let newstr=string.replaceAll("a",'1' )
.replaceAll("A",'1' )
.replaceAll("b",'2')
.replaceAll("B",'2' )
.replaceAll("c",'3')
.replaceAll("C",'3' )
.replaceAll("d",'4')
.replaceAll("D",'4' )
console.log(newstr)

//using function
let string1='a,b,c,d,e,f,g,h,i,j,d,l,m,n,a,b,c,d';
const replace=(string1)=>{
    let str=string1.replaceAll(/a/gi,'1')
    .replaceAll(/b/gi,'2')
    .replaceAll(/c/gi,'3')
    .replaceAll(/d/gi,'4')
    console.log(str)
}
replace(string1);

