const mongoose = require("mongoose");


const CategorySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      time: true,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);