const mongoose = require("mongoose");

// Site Schema
const SiteSchema = new mongoose.Schema({
  name_site: {
    type: String,
    trim: true
  },
});

const Site = module.exports = mongoose.model('Site', SiteSchema);
module.exports = Site;