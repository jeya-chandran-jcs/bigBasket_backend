import express from "express";
import userModel from "../model/usermodel.js";


const router = express.Router();

router.post("/register",async (req,res)=>{
    try{
        const isUserExist=await userModel.findOne({name:req.body.name })
        if(isUserExist){
          res.send({message:"user Alreay exist"})
        }
        else{
          const newUser= new userModel({...req.body,verified:true,role:req.body.role || "user"})
          await newUser.save()
          res.send({message:"user registered successfully"})
        }
    }
    catch(err){
        console.log("register router error",err)
        res.send({message:"user registration failed"})
    }
})

router.post("/login",async(req,res)=>{
  try{
    const user=await userModel.findOne({
      userId:req.body.userId,
      password:req.body.password,
      verified:true
    })
    if(user){
      res.send(user)
    }
    else{
      res.send({message:"login failed"})
    }
  }
  catch(err){
    res.send({message:"error while login"})
  }
  })

  router.post("/update-user",async(req,res)=>{
    try{
      const role=await userModel.findOneAndUpdate({userId:req.body.userId},req.body)
      role ? res.send("updated successfully") : res.send("update failed")
    }
    catch(err){
      res.send("error while updating")
    }

  })
export default router