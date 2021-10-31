const mongoose = require("mongoose");

// Movie Schema
const MovieSchema = new mongoose.Schema({
  name_movie: {
    type: String,
    required: true,
    trim: true
  },
  release_date: {
    type: Date,
    required: true,
  },
  image_namefilm: {
    type: String,
    required: true,
  },
  image_coverfilm: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  trailer_url: {
    type: String,
    required: true,
  },
  status: {
    type: String,
      default: "Available",
      enum: ["Available", "Unavailable"],
  },
  category: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    name_category: {
      type: String,
      required: true,
    },
  },
  production: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Production",
      required: true,
    },
    name_prod: {
      type: String,
      required: true,
    },
  },
  ekip: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ekip",
      required: true,
    },
    firstname_ekip: {
      type: String,
      trim: true
    },
    lastname_ekip: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String
    },
    role: {
      type: String,
      required: true,
    },
  },
  site: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Site",
      required: true,
    },
    name_site: {
      type: String,
      trim: true
    },
  },
  country: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
      required: true,
    },
    name_country: {
      type: String,
      trim: true,
      unique: true,
    },
  }
});

const Movie = module.exports = mongoose.model('Movie', MovieSchema);
module.exports = Movie;