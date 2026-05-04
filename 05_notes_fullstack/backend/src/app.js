const express = require('express');
const noteModel = require("./models/note.model");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/add-notes", async (req, res) => {
    const data = req.body;
    const note = await noteModel.create({
        title : data.title,
        content : data.content,
    });

    res.status(201).json({
        message : "Note created successfully",
        note,
    });
});

app.get("/notes", async (req, res) => {
    const notes = await noteModel.find();
    res.status(200).json({
        message : "Notes fetched successfully",
        notes,
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
        content : data.content,
    });

    res.status(200).json({
        message : "Note updated successfully",
    });
});

module.exports = app;