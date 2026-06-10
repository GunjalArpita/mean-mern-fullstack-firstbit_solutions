const mongoose=require('mongoose')

const userSchema=new mongoose.Schema(
    {
        name:{type:String,
            required:true,
            unique:false
        },
        uname:{type:String,
            required:true,
            unique:true
        },
        email:{type:String,
            required:true,
            unique:true
        },
        address:{type:String,
            required:true,
            unique:true
        }
    }
)
const userType=new mongoose.model('userType',userSchema)
module.exports=userType;