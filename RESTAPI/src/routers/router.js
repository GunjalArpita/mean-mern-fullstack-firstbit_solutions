const express=require('express')
const router=express.Router()
const app=express()
app.use(express.json())
const userType=require('../models/users')
const bodyparser=require('body-parser')
app.use(bodyparser.json())
app.get('/',async(req,res)=>
    {
        //res.send("hello all")
        //to fetch data from mongoDB we use the find() method
        //empty {} means no condition.
        const allrecords=await userType.find({})
        res.send(allrecords)
    })
    
    //finding single record by id
    app.get('/:id',async(req,res)=>
        {
            const _id=req.params.id
            const singlerecord=await userType.findById({_id})
            res.send(singlerecord)
        })
    //deleting record
     app.delete('/:id',async(req,res)=>
        {
        
                const _id=req.params.id
                const deleterecords=await userType.deleteOne({_id})
                res.send(deleterecords)
                
        })
     
    app.patch('/:id',async(req,res)=>
            {
               
                const _id=req.params.id
                const updatedData=await userType.findByIdAndUpdate(_id,req.body)
                res.send(updatedData)
                
            })
        
    //try catche block
    app.post('/',async(req,res)=>
    {
    try{
        console.log(req.body)
    const newuser=new userType(req.body)
    const insertdata= await newuser.save()//save returns a promise
    res.send(insertdata)
    }
    catch(e){
    
    }
    }
    )
 
    module.exports=router;
