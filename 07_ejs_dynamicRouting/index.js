const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());                            // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true }));    // Middleware to parse URL-encoded request bodies
app.set('view engine', 'ejs');                       // Set EJS as the view engine
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files(css, images, js for frontend) from the 'public' directory

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/user/:username", (req, res) => {
    const username = req.params.username; // Extract the username from the URL parameter
    res.send(`Welcome, ${username}`);
});

app.get("/user/:username/:age", (req, res) => {
    const username = req.params.username;
    const age = req.params.age; // Extract the age from the URL parameter
    res.send(`Welcome, ${username}. You are ${age} years old.`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

