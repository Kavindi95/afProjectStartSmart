const express = require('express');
//file upload
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());
//file upload
app.use(fileUpload());

const PORT = process.env.PORT || 5000;

//connect to Mongoose
mongoose.connect('mongodb://localhost/startSmart');
var db = mongoose.connection;

/*
* Load the application
* */
app.get('/', function (req,res) {
    res.send('welcome start smart');
});

//file upload endpoint
app.post('/upload', (req,res) => {
    if(req.files == null){
        return res.status(400).json({msg: 'No File Uploaded'});
    }
    const file = req.files.file;

    file.mv(`${__dirname}/../smartclient/public/uploads/${file.name}`, err => {
        if (err){
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
    })
});

app.listen(PORT , () => {
    console.log(`Running on PORT : ${ PORT }`);
});

