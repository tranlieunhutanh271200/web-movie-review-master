const mongoose = require("mongoose");

// User Schema
const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    ],
    unique: true,
  },
  dob: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    minlength: [8, "Password should be 8 character long"],
    required: true,
    select: false,
  },
  role: {
    type: String,
    required: true,
    default: "user",
    enum: ["user", "admin"],
  },
});

const User = module.exports = mongoose.model('User', UserSchema);
module.exports = User;