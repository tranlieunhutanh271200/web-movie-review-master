const mongoose = require("mongoose");


const CategorySchema = new mongoose.Schema({
    name: {
      type: String,
      time: true,
      unique: true,
      index: true,
    },
    status: {type: Boolean, default: true}
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);

module.exports = {Category, CategorySchema};