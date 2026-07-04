const express = require('express');
const userModel = require('./model/user');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World yoyo');
})

app.get("/viewall", async (req, res) => {
    const data = await userModel.find();
    res.send(data);
});

app.post("/create", async (req, res) => {
    const { name, email, image } = req.body;
    await userModel.create({
        name,
        email,
        image
    });
    res.send("User created successfully");
});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    await userModel.findByIdAndDelete(id);
    res.send("User deleted successfully");
});

app.patch("/update/:id", async (req, res) => {
    const id = req.params.id;
    const { name, email, image } = req.body;
    await userModel.findByIdAndUpdate(id, {
        name,
        email,
        image
    }, { new: true });
    res.send("User updated successfully");
});

app.listen(3000, () => {
    console.log('Server is running...');
})