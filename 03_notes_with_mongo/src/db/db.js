const mongoose = require("mongoose");

async function connectDB() {

    await mongoose.connect("xyz");
    console.log("Connected to DB");

}

module.exports = connectDB;