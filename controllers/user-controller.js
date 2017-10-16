const mdb = require("../models");
const bcrypt = require("bcrypt-nodejs");

const User = {};

// =================================================
// CREATE NEW USER
// =================================================
User.create = function (req, res) {
  // alteratively could just pass req.body
  let newUser = new mdb.User({
    username: req.body.username,
    password: generateHash(req.body.password),
    name: req.body.name
  });

  newUser.save(function (err, doc) {
    if (err) {
      throw err;
    } else {
      res.json(doc);
    }
  });
}

// =================================================
// GET USER DATA
// =================================================
User.show = function(req, res) {
  mdb.User.find({
    username: req.body.username,
    password: req.body.password
  }, function (err, doc) {
    if (err) {
       throw err;
     } else {
       res.json(doc);
     }
  });
}

// =================================================
// UPDATE USER INFORMATION
// =================================================
User.update = function(req, res) {
  // ASSUMPTIONS
  // req.body contains the new username or password
  // Looks in the mdb for the username and password of user

  mdb.User.findOneAndUpdate({
    'username': req.body.username,
    'password': req.body.password
  }, req.body, function (err, user) {
    if (err) {
      throw err;
    } else {
      res.json(user);
    }
  });
}

// =================================================
// DELETE USER ACCOUNT
// =================================================
User.delete = function(req, res) {
  mdb.User.findOneAndRemove(req.body, function (err) {
    if (err) {
      throw err;
    }
    console.log("user deleted!");
  })
}

// generates both hash and salt
function genereateHash(password) {
  return bcrypt.hashSync(password, bCrypy.genSaltSync(8), null);
}

module.exports = User;
