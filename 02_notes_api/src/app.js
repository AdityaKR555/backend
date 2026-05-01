//server ko create krna

const express = require('express');
const app = express();

app.use(express.json()); //middleware to parse JSON request body


const notes = [];

app.post('/notes', (req, res) => {
     notes.push(req.body);
    //  console.log(notes);
     res.status(201).json({ message: 'Note created successfully' });
})

app.get('/notes', (req, res) => {
    res.status(200).json({
        message: 'Notes retrieved successfully',
        data: notes
    });
});

app.delete('/notes/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < notes.length) {
        // notes.splice(index, 1);
        delete notes[index]; 
        res.status(200).json({ message: 'Note deleted successfully' });
    } else {
        res.status(404).json({ message: 'Note not found' });
    }
})

app.patch('/notes/:index', (req, res) => {
    const index = parseInt(req.params.index);
    notes[index] = req.body;
    res.status(200).json({ message: 'Note updated successfully' });
});



module.exports = app;