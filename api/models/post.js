const mongoose = require("mongoose");


const PostSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        title: {type: String, default: ""},
        content: {type: String, default: ""},
        desc: {type: String, default: ""},
        thumbnail: {type: String, default: ""},
        genre: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Genre",
            default: "61b99d16a9851c3fbcfb3cfb"
        },
        status:{type: Boolean, default: false},
        hid: {type: Boolean, default: false}
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = { Post, PostSchema };