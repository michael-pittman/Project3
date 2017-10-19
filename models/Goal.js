const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  type: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  }

});

const Goal = mongoose.model("Goal", GoalSchema);

module.exports = Goal;
