import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    image:String,
    caption:String,

})

export default mongoose.model("Post", postSchema);//Post=> collections