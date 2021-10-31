const mongoose = require("mongoose");

// News Schema
const NewsSchema = new mongoose.Schema({
  name_news: {
    type: String,
    trim: true,
  },
  writter_news: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  content: {
    type: String,
    trim: true,
  },
  cover_url: {
      type: String,
      trim: true,
  }
});

const Country = module.exports = mongoose.model('Country', CountrySchema);
module.exports = Country;