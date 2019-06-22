const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyPorser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
//file upload


const instructorAddAssignment = require("./routes/instructor/addassignments");
const admin = require("./routes/admin/adminRoutes");
const instructor = require("./routes/instructor/instructorRoutes");

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

app.use("/addassignment", instructorAddAssignment);
app.use("/admin", admin);
app.use("/instructor", instructor);

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
module.exports = app;
