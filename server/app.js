const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyPorser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
//file upload
const fileUpload = require('express-fileupload');

const instructorAddAssignment = require("./routes/instructor/addassignments");
const admin = require("./routes/admin/adminRoutes");
const instructor = require("./routes/instructor/instructorRoutes");
const instructorAddExam=require("./routes/instructor/addexams");
const markAssignment=require("./routes/instructor/marksassignments");
const markExam=require("./routes/instructor/marksexams");

mongoose.connect(
  "mongodb+srv://tharuka:tharuka12345@afprojectstartsmart-ycawy.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.use(morgan("dev"));
app.use(bodyPorser.urlencoded({ extended: false }));
app.use(bodyPorser.json());
app.use(cors());
//file upload
app.use(fileUpload());

app.use("/addassignment", instructorAddAssignment);
app.use("/admin", admin);
app.use("/instructor", instructor);
app.use("/addexam",instructorAddExam);
app.use("/markassignment",markAssignment);
app.use("/markexam",markExam);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "its working"
  });
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
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
module.exports = app;
