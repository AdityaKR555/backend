const mongoose = require("mongoose");

async function connectDB() {

    await mongoose.connect("mongodb+srv://aditya:G4xFNsy34JOX7Ihv@cluster0.xteb7hi.mongodb.net/chotubabudb");
    console.log("Connected to DB");

}

module.exports = connectDB;