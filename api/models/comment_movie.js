const mongoose = require("mongoose");

// Comment Movie Schema
const MovieCommentSchema = new mongoose.Schema({
  name_writter: {
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
  },
  comment: {
    type: String,
    trim: true,
  },
});

const MovieComment = module.exports = mongoose.model('MovieComment', MovieCommentSchema);
module.exports = MovieComment;