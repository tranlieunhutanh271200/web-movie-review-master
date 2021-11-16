const mongoose = require("mongoose");


const CastSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    bio: {type: String},
    dob: {type: Date},
    castPic: {type: String, default: ""},
    status: {type: Boolean, default: true}
  },
  { timestamps: true }
);

const Cast = mongoose.model("Cast", CastSchema);

module.exports = {Cast, CastSchema};