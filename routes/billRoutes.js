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

router.get("/get-one-bill", async (req, res) => {
    try {
        const userId = req.query.userId; // Assuming the user ID is passed as a query parameter
        const bills = await billModel.find({ userId });

        res.send(bills);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});


export default router
