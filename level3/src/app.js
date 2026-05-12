import express from 'express';
import noteModel from './models/note.model.js';

const app = express();
app.use(express.json());
app.post("/notes", async (req, res) => {
    try {
        const data = req.body;
        await noteModel.create({
            title: data.title,
            description: data.description                   
        }); //here we create a new note in the database using the note model and the data from request body
        res.status(201).json({ message: "Note created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating note", error: error.message });
    }
});

app.get("/notes", async (req, res) => {
    try{
        const notes = await noteModel.findOne({
            title:"test_title7"
        });//array of objects of notes from database using note model,by default give array.
        
        //findOne method is used to find a single document in the database that matches the specified criteria. It returns the first document that matches the criteria, or null if no document matches. In this case, it will return the first note that has the title "test_title7". If there are multiple notes with the same title, only the first one will be returned.
        //find method is used to find multiple documents in the database that match the specified criteria. It returns an array of documents that match the criteria. If no documents match, it returns an empty array. In this case, if we use find method instead of findOne, it will return an array of all notes that have the title "test_title7", even if there is only one note with that title.
        res.status(200).json({
            message: "Notes fetched successfully",
            notes: notes
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching notes", error: error.message });
    }
});

app.delete("/notes/:id",async (req,res)=>{
    try {
        const id = req.params.id;
        await noteModel.findOneAndDelete({ _id: id }); //here we delete the note from database using the id from request params and the note model
        res.status(200).json({message: "Note deleted successfully"});
    } catch (error) {
        res.status(500).json({ message: "Error deleting note", error: error.message });
    }
})

app.patch("/notes/:id",async (req,res)=>{
    try {
        const id = req.params.id;
        const data = req.body;
        await noteModel.findOneAndUpdate({ _id: id }, {
            title: data.title,
            description: data.description
        }); //here we update the note in the database using the id from request params and the data from request body and the note model
        res.status(200).json({message: "Note updated successfully"});
    } catch (error) {
        res.status(500).json({ message: "Error updating note", error: error.message });
    }
})

export default app;
//hziioua6d
//https://ik.imagekit.io/hziioua6d/path/to/myimage.jpg

