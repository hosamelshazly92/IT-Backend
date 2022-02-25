// imports
const mongoose = require("mongoose");
const { Schema } = mongoose;

// schema
const wordSchema = new Schema(
  {
    letter: {
      type: String,
      default: "N/A",
    },
    noun: {
      word: {
        type: String,
        default: "N/A",
      },
      gender: {
        type: String,
        default: "N/A",
      },
    },
    verb: {
      type: String,
      default: "N/A",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Word", wordSchema);
