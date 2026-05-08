//server ko create karna

import express from "express";

const app = express();

const notes = []; //here we create an array to store the notes data
app.use(express.json()); //middleware to parse json data from request body


app.post("/notes", (req, res) => {
    notes.push(req.body); //here we push the data from request body to notes array
    res.status(201).json({ message: "Note created successfully" }); //here we send response to client with status code 201 and message
})

app.get("/notes", (req, res) => {
    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    }); //here we send response to client with status code 200 and notes data)
})

app.delete("/notes/:index", (req,res)=>{
   const index = req.params.index; //here we get the index from request params
   delete notes[index]; //here we delete the note from notes array using index
   res.status(200).json({message: "Note deleted successfully"}); //here we send response to client with status code 200 and message
})

app.patch("/notes/:index",(req,res)=>{
    const index = req.params.index;
    const description = req.body.description; //here we get the description from request body
    const title = req.body.title; //here we get the title from request body
    notes[index].description = description; //here we update the description of the note in notes array using index
    notes[index].title = title; //here we update the title of the note in notes array using index
    res.status(200).json({message: "Note updated successfully"}); //here we send response to client with status code 200 and message
})

export default app; //here we export the app to use in server.js file