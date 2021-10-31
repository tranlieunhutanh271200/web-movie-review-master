const mongoose = require("mongoose");

// Ekip Schema
const EkipSchema = new mongoose.Schema({
  firstname_ekip: {
    type: String,
    trim: true
  },
  lastname_ekip: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: Date,
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
  bio: {
    type: String
  },
  role: {
    type: String,
    required: true,
  },
});

const Ekip = module.exports = mongoose.model('Ekip', EkipSchema);
module.exports = Ekip;