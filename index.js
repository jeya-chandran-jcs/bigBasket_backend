import express from "express"
import cors from "cors"
import * as dotenv from "dotenv"
import mongoose from "mongoose"
import userRouter from "./routes/userRoutes.js"
import itemRouter from "./routes/itemRoutes.js"
import billRouter from "./routes/billRoutes.js"

const app=express()
dotenv.config()
app.use(cors())

app.use(express.json())
const PORT=process.env.PORT

app.get("/",(req,res)=>{
    res.send("Big Basket")
})

app.use("/user",userRouter)
app.use("/item",itemRouter)
app.use("/bill",billRouter)

mongoose.connect(process.env.Mongo_Url)
.then(()=>{
    console.log("mongoose is connected")
    app.listen(PORT,()=>console.log("server started on port",PORT))
})
.catch(err=>{
    console.log("mongoose is not connected",err)
})