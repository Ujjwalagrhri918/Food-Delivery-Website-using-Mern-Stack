import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

//app config
const app = express()
// port at which it listens request
const port = 4000


// middleware 
app.use(express.json())
app.use(cors())


// DB Connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
// api endpoint for authentication
app.use("/api/user", userRouter)
// acesss the images of the uploads folder using url
app.use("/images",express.static('uploads'))
// for cart 
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})


// mongodb+srv://ujjwal:anshu@cluster0.krqbnkq.mongodb.net/?