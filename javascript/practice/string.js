//const str='arpita gunjal'
//output='a1p2t3 g4n5a6

let str='arpita gunjal'
let newstr=''
let cnt=1
for(i in str)
{
    if(i%2==0)
   { 
    newstr=newstr+str[i]

   }
   
}
console.log(newstr)