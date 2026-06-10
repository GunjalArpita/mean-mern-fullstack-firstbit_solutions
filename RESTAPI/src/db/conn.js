const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/Testnodejs')


.then(()=>
{
    console.log("connected to mongoDB");
})
.catch((e)=>
{
    console.log("connection failed",e);
})
// MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017, connect ECONNREFUSED ::1:27017
//mongodb://arpitagunjal:8796866724@localhost:27017/
//mongodb://localhost:27017/Testnodejs