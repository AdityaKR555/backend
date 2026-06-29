const mongoose = require('mongoose');

const connectDB = async() => {
    await mongoose.connect("xyz");
    console.log("Connected to DB");
}

module.exports = connectDB;