const express = require("express");

const app = express();   //creating server instance

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/about", (req, res) => {
    res.send("This is the about page.");
})

app.listen(3000);   //to start server and listen on port 3000