const express = require('express');
const noteModel = require('./models/note.model');

const app = express();
app.use(express.json()); //middleware to parse JSON request body

app.post("/notes", async (req, res) => {

    const data = req.body;
    await noteModel.create({
        title: data.title,
        description: data.description,
    })
   
    res.status(201).json({
        message: "Note created successfully"
    });
});

app.get("/notes", async (req, res) => {
    const notes =await noteModel.find();
    res.status(200).json({
        message : "Notes fetched successfully",
        data : notes,
    });
});

app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id;
    await noteModel.findByIdAndDelete({
        _id : id,
    });
    res.status(200).json({
        message : "Note deleted successfully",
    });
});

app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    await noteModel.findByIdAndUpdate({
        _id : id,
    }, {
        title : data.title,
        description : data.description,
    });
    res.status(200).json({
        message : "Note updated successfully",
    });
});


module.exports = app;