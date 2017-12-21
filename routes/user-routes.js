const userController = require("../controllers/user-controller.js");
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  // NOTE: make Axios call to acquire user data?
  res.json();
});

module.exports = router;
