import express from "express"
import billModel from "../model/billmodel.js"

const router=express.Router()

router.post("/add-bill",async(req,res)=>{
     try{
        const newBill= new billModel(req.body)
        await newBill.save()
        newBill ? res.send("bill created successfully") : res.send("bill not created")
    }catch(err){
        res.json(err)
    }
})

router.get("/get-bill",async(req,res)=>{
    try{
       const bill= await billModel.find()
     
       bill ? res.send(bill) : res.send("bill not created")
   }catch(err){
       res.json(err)
   }
})


export default router