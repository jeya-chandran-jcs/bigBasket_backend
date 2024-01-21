import mongoose from "mongoose"

const userSchema=mongoose.Schema(
    {
    name:{type:String,required:true}, 
    userId:{type:String,required:true},
    password:{type:String,required:true},
    verified:{type:Boolean},
    role:{type:String,required:true,default:"user",enum:["admin","user"]}
    },{
    timestamps:true
    }
    )

const userModel=mongoose.model("user",userSchema)

export default userModel