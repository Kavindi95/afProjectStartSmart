const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

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

app.listen(PORT , () => {
    console.log(`Running on PORT : ${ PORT }`);
});

