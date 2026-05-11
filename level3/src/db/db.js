import mongoose from "mongoose";


async function connectDB(){
    try {
        await mongoose.connect("mongodb+srv://Completed-backend:snjdb6fQpz6RYhro@complete-backend.cb2jbhl.mongodb.net/hally");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export default connectDB;