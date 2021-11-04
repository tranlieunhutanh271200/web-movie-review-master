const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    namePic: { type: String, required: true, default:""},
    coverPic: { type: String, required: true, default:""},
    rating: { type: Number, required: true, min:0, max:10, default:0 },
    img: { type: String, defaut: "" },
    isAdmin: { type: Boolean, default: false },
    trailer: { type: String, required: true, default:""},
    desc: { type: String },
    limit: {type: Number},
    site: {type: String},
    production: [mongoose.model("Production")],
    category: [mongoose.model("Category")],
    country: [mongoose.model("Country")]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);