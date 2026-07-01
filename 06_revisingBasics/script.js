// import express from 'express'

// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000')
// })



const app = express();

app.use(function(req, res, next){
    console.log(req.url);
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/profile", function(req, res){
    res.send("This is the profile page");
})

app.use((err, req, res, next) => {              //speacial route made for error handling by express, it will be called when an error is thrown in the app
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});