const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Assignment=require('../../model/Course/CourseDetails');

router.post("/", (req, res, next) => {
    const course = new course({

        create and give a new & unique id

    coursename: req.body.coursename,
    duration:  req.body.duration,
    numcredits:  req.body.numcredits,
    numsubjects:  req.body.numsubjects,
    numsemester:  req.body.numsemester,
    semprice:  req.body.semprice,
    subdetails: req.body.subdetails
    });
course
    .save()
    .then(result => {
    console.log(result);
})
.catch(err => console.log(err));

res.status(200).json({
    message: "course Added Successfully",
    createdbrs: course
});
});
module.exports = router;