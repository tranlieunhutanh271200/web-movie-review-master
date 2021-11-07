const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dob: {type: Date},
    password: { type: String, required: true },
    profilePic: { type: String, defaut: "" },
    isAdmin: { type: Boolean, default: false },
    status: {type: Boolean, default: true}
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = {User, UserSchema};