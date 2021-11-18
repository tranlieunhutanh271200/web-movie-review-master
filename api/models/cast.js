const mongoose = require("mongoose");


const CastSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    bio: {type: String, default: ""},
    dob: {type: Date, default: Date.now()},
    castPic: {type: String, default: ""},
    status: {type: Boolean, default: true}
  },
  { timestamps: true }
);

const Cast = mongoose.model("Cast", CastSchema);

module.exports = {Cast, CastSchema};