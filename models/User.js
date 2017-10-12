const mongoose = require("mongoose");
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

  goals: [{ type: SchemaTypes.ObjectId, ref: "Goal"}]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
