const express = require("express");

const Router = express.Router();

Router.get("/", function(req, res) {
  res.json({
    message: "Start Smart Dashboard"
  });
});

module.exports = Router;
