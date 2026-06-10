const greet=require('./localmodule')
const date=require('./datetime')
console.log(greet)
console.log(date.currTime)
console.log(__dirname)
console.log(__filename)

// //blocking code---print hello first then sum
const fs=require('fs')
const syncfiledata=fs.readFileSync('demotext.txt')
console.log(syncfiledata.toString())
let sum=0;
for(let i=0;i<=50;i++)
   { 
    sum=sum+i;
}
console.log("sum "+sum)

// non blocking--print sum first then hello
fs.readFile('./demotext.txt',(err,data)=>
{
console.log(data)})
let sum1=0;
for(let i=0;i<=50;i++)
   { 
    sum1=sum1+i;
}
console.log("sum "+sum1)

//write new data in file
fs.writeFile('demotext.txt',"hey there this is ",function(err)
{ if(err)
{
    console.log(err)
}
else
{
    console.log("new data saved")
}
})

//append 
fs.appendFile('demotext.txt','add my new data to old data',function(err)
{
if(err)
{
    console.log(err)
}
else{
    console.log("new data added")
}
})


