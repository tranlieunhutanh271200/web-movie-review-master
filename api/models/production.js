const mongoose = require("mongoose");

// Production Schema
const ProductionSchema = new mongoose.Schema({
  name_prod: {
    type: String,
    trim: true
  },
  country_origin: {
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Country",
        required: true,
      },
    name_country: {
        type: String,
        required: true,
      },
  },
});

const Production = module.exports = mongoose.model('Production', CountrySchema);
module.exports = Production;