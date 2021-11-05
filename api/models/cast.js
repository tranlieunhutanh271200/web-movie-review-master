const mongoose = require("mongoose");


const CastSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    bio: {type: String, required: true},
    dob: {type: Date},
    castPic: {type: String, default: ""}
  },
  { timestamps: true }
);

const Cast = mongoose.model("Cast", CastSchema);

module.exports = {Cast, CastSchema};