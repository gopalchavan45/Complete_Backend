import express from "express";
import multer from "multer";
import uploadImage from "./services/storage.service.js";
import postModel from "./models/post.model.js";
const app = express();

const upload = multer({
    storage: multer.memoryStorage()
});

app.post("/create-post", upload.single("image"), async (req, res) => {

    console.log(req.body);
    console.log(req.file);

    const imageUrl = await uploadImage(req.file.buffer);
    console.log("Image URL:", imageUrl);
    res.status(200).json({
        message: "Post created successfully",
        body: req.body,
        file: req.file,
        imageUrl: imageUrl
    });
    const post = await postModel.create({
        image: imageUrl,
        caption: req.body.caption
    }); 
    res.status(200).json({
        message: "Post created successfully",
        post: post
    });
});

app.get("/about", (req, res) => {
    res.send("About is here");
});

export default app;