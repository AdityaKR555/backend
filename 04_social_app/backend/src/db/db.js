const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://aditya:G4xFNsy34JOX7Ihv@cluster0.xteb7hi.mongodb.net/socialappdb");
    console.log("Connected to DB");
}

module.exports = connectDB;