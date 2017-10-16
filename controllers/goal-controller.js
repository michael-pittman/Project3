const mdb = require("../models");

const Goal = {};

// =================================================
// CREATE NEW USER
// =================================================
Goal.create = function (req, res) {
  mdb.User.find({
    username: req.body.username,
    password: req.body.password
  }, function (err, user) {
    if (err) {
       throw err;
     }
     // Push user goal to goals array
     user.goals.push(req.body.goal);
     // Save user with new goal
     user.save(function (err) {
       if (err) {
         throw errr;
       }
       console.log("Goal created");
     });
  });
}

// =================================================
// UPDATE A SPECIFIC USER GOAL
// =================================================


// =================================================
// DELETE A SPECIFIC USER GOAL
// =================================================
Goal.delete = function (req, res) {
  mdb.User.find({
    username: req.body.username,
    password: req.body.password
  }, function (err, user) {
    if (err) {
       throw err;
     }
     // Select the goal to be removed via id
     user.goals.id(_id).remove();
     // Save user with goal removed
     user.save(function (err) {
       if (err) {
         throw errr;
       }
       console.log("Goal Removed");
     });
  });
}

// =================================================
// HELPER FUNCTIONS
// =================================================


module.exports = Goal;
