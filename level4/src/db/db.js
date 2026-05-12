import mongoose from "mongoose";

async function connectDB() {
    try{
        await mongoose.connect("mongodb+srv://Completed-backend:snjdb6fQpz6RYhro@complete-backend.cb2jbhl.mongodb.net/project-1")
        console.log("connected to MongoDB")
    }catch(error){
        console.error("something error in connectionDB :",error)
    }
}

export default connectDB;