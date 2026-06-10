const express=require('express')
const app=express()
app.use(express.json())
require('/MEAN & MERN/RESTAPI/src/db/conn')
const router=require('./routers/router')
const morgan=require('morgan')
const bodyParser = require('body-parser')

app.use(router)
app.use(bodyParser.json())
app.use(morgan('dev'))

//app listen
app.listen(8080,()=>
{
    console.log("server is live")
})