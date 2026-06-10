let express=require('express'); 
let app=express();
const fs=require('fs');

app.set('view engine','ejs')
app.use('/',(req,res)=>
{
    const users=JSON.parse(fs.readFileSync('api.json')).users
    res.render('dashboard',{data:users})  ///render to file dashboard.
    
})

app.listen(5000,()=>
{
    console.log("listing to port 5000");
})

//run-   localhost:5000/dashboard