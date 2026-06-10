const express=require('express')
require('dotenv').config()

const app=express();

const data={
   id:101,
   name:'Arpita',
   city:'sangamner',
   age:20

}


app.set('view engine','ejs')
app.get('/',(req,res)=>
{
    res.render('home',{user:data})
})
//try-catch block
try{
    throw new Error('invalid port number')
    console.log('some code')
}
catch({name,message}){
  console.log("something went wrong with message")
  console.log(message)
}
finally
{
    console.log("Thanks for visiting")
}

app.listen(process.env.PORT,()=>
    {
        console.log('listining to port '+process.env.PORT)
    })