const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    fs.readdir(`./files`, (err, files) => {
        // console.log(files);
        res.render('index', {files : files});
    });
});

app.post('/create', (req, res) => {
//    console.log(req.body);
    const filename = req.body.title.split(" ").join("")+".txt";
    fs.writeFile(`./files/${filename}`, req.body.content, function(err){
        if(err){
            console.log(err);
            res.send("Error creating file");
        } else {
            res.redirect('/');
        }
    });
});

app.get('/notes/:filename', (req, res) => {
    const filename = req.params.filename;
    fs.readFile(`./files/${filename}`, 'utf8', (err, data) => {
        if(err){
            console.log(err);
            res.send("Error reading file");
        } else {
            res.render('showFile', {filename: filename, content: data});    
        }
    });
});

app.get('/edit/:filename', (req, res) => {
    const filename = req.params.filename;
    fs.readFile(`./files/${filename}`, 'utf8', (err, data) => {
        if(err){
            console.log(err);
            res.send("Error reading file");
        } else {
            res.render('editFile', {filename: filename, content: data});    
        }
    });
});

app.post("/edit", (req, res) => {
    const prevtitle = req.body.prevtitle;
    const newtitle = req.body.newtitle.split(" ").join("")+".txt";
    const prevcontent = req.body.prevcontent;
    const newcontent = req.body.newcontent;

    fs.rename(`./files/${prevtitle}`, `./files/${newtitle}`, (err) => {
        if (err) {
            console.log(err);
            res.send("Error renaming file");
        } else {
            fs.writeFile(`./files/${newtitle}`, newcontent, (err) => {
                if (err) {
                    console.log(err);
                    res.send("Error updating file");
                } else {
                    res.redirect('/');
                }
            });
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})