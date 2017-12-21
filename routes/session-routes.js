const sessionController = require("../controllers/session-controller.js");
const express = require("express");
const router = express.Router();

// NOTE: determine how to appropriately pass to router as middleware
const passport = require("../config/passport.js");

router.use(passport);

// Authentication Routing

// logout route
router.get("/logout", sessionController.logout);

// authenticate user route
// NOTE: determine react alternative for redirect
router.post('/', passport.authenticate('local-signin'));

module.exports = router;
