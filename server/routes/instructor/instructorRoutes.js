const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Instructor = require("../../model/instructor/instructor");

router.post("/", (req, res, next) => {
  const instructor = new Instructor({
    _id: new mongoose.Types.ObjectId(), //construcyor function automatically create and give a new & unique id
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    registeredDate: req.body.registeredDate
  });
  instructor
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));

  res.status(200).json({
    message: "Instructor Added Successfully !",
    createdbrs: instructor
  });
});

/*
router.patch("/:assignmentId", (req, res, next) => {
  const id = req.params.assignmentId;
  Assignment.update({ _id: id }, { $set: { date: req.body.date } })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    });

  console.log(err);
  res.status(500).json({
    error: err
  });
});
*/

router.get("/", (req, res, next) => {
  Instructor.find()
    .select("_id name email password username registeredDate")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        instructor: docs.map(doc => {
          return {
            name: doc.name,
            email: doc.email,
            username: doc.username,
            registeredDate: doc.registeredDate
          };
        })
      };
      if (docs.length > 0) {
        res.status(200).json(response);
      } else {
        res.status(404).json({
          message: "No Entry Found ! "
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
