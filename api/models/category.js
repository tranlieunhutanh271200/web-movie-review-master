const mongoose = require("mongoose");

// Category Schema
const CategorySchema = new mongoose.Schema({
  name_category: {
    type: String,
    required: true,
    trim: true
  }
});

const Category = module.exports = mongoose.model('Category', CategorySchema);
module.exports = Category;