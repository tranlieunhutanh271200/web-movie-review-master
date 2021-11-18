const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema(
    {
    name: { type: String},
        status: {type: Boolean, default: true}
    } 
);

const Country = mongoose.model("Country", CountrySchema);

module.exports = {Country, CountrySchema};