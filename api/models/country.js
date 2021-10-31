const mongoose = require("mongoose");

// Country Schema
const CountrySchema = new mongoose.Schema({
  name_country: {
    type: String,
    trim: true,
    unique: true,
  },
  zip_code: {
    type: String,
    trim: true
  },
});

const Country = module.exports = mongoose.model('Country', CountrySchema);
module.exports = Country;