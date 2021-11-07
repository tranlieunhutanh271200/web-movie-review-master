const mongoose = require("mongoose");

const {ProductionSchema} = require("./production");
const {CategorySchema} = require("./category");
const {CountrySchema} = require("./country");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String},
    releaseDate: { type: Date},
    namePic: { type: String, default:""},
    coverPic: { type: String, default:""},
    rating: { type: Number, min:0, max:10, default:0 },
    img: { type: String, defaut: "" },
    trailer: { type: String, default:""},
    desc: { type: String },
    limit: {type: Number},
    site: {type: String},
    production: [ProductionSchema],
    category: [CategorySchema],
    country: [CountrySchema],
    status: {type: Boolean, default: true}
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = {Movie, MovieSchema};