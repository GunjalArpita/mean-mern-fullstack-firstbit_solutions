const express=require('express')
const app=express()
require('dotenv').config()
const fs=require('fs')
const status=require('express-status-monitor')
 
//streams in express
app.use(status())
app.get('/',(req,res)=>
 {   
//     fs.readFile('demotext.txt',(err,data)=>
//     {
//          res.end(data)
//     })
   
const stream =fs.createReadStream('./demotext.txt','utf-8')
stream.on('data',(chunk)=>res.write(chunk))
stream.on('end',()=>res.end())
})
//routing in express
app.get('/info',(res)=>
{
    res.send('we are learning node and expresse js')
})




app.listen(process.env.PORT,()=>
{
    console.log('listining to port '+process.env.PORT)
})