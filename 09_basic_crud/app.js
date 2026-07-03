const express = require("express");
const app = express();
const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// crud operations below

app.get("/create", async (req, res) => {
  try {
    const newUser = await userModel.create({
      name: "Aditya Kumar",
      age: 21,
      email: "adityakumar@example.com",
    });

    res.send(newUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.get("/read", async (req, res) => {
  try {
    const users = await userModel.find();   
    res.send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/update", async (req, res) => {
  try {
    const updatedUser = await userModel.findOneAndUpdate(
      { age: 21 },
      { name: "Aditya Kumar Rai" },
      { new: true }
    );

    res.send(updatedUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/delete", async (req, res) => {
  try {
    const deletedUser = await userModel.findOneAndDelete({ age: 21 });

    res.send(deletedUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.listen(3000);
