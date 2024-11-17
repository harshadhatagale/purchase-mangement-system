
import mongoose from "mongoose";

const connectDb=async ()=>{
    if (mongoose.connections[0].readyState)
    {
        return mongoose.Connection
    }
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connected db")
}

export default connectDb