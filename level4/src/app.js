import express from "express";
import multer from "multer";

const app = express();

const upload = multer({
    storage: multer.memoryStorage()
});

app.post("/create-post", upload.single("image"), async (req, res) => {

    console.log(req.body);
    console.log(req.file);

    res.status(200).json({
        message: "Post created successfully",
        body: req.body,
        file: req.file
    });
});

app.get("/about", (req, res) => {
    res.send("About is here");
});

export default app;