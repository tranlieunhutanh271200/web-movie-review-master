const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema(
    {
    name: { type: String,
        time: true,
        unique: true,
        index: true,}
    }  
);

const Country = mongoose.model("Country", CountrySchema);

module.exports = {Country, CountrySchema};