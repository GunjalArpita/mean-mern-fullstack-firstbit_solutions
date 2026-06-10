const express=require('express')
const app=express()
require('dotenv').config()
const fs=require('fs')
const status=require('express-status-monitor')
const path=require('path')

console.log(__dirname)
console.log(__filename)
//serving html page to express-only below 2 lines-  ,to run-http://localhost:8080/info/
app.use(status())
app.use('/info',express.static( path.join(__dirname,'public') ))


//error page
app.use((req,res)=>
{   
    res.status(404);
    res.send(`<h1>error:Page not found!!!!!`)
}
)

//from expressintro.js
  app.get('/info',(req,res)=>
    {
        res.send('we are learning node and expresse js')
    })

    
app.listen(process.env.PORT,()=>
    {
        console.log('listining to port '+process.env.PORT)
    })