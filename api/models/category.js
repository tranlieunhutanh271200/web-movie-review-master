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

const Category = mongoose.model("Category", CategorySchema);

module.exports = {Category, CategorySchema};