import mongoose from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://ujjwal:anshu@cluster0.krqbnkq.mongodb.net/demoproject').then(()=>console.log("DB connected"))
}