const mongoose = require("mongoose");
const Goal = require("./Goal");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  goals: [Goal]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
