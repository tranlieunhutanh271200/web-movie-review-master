const mongoose = require("mongoose");

const {CastSchema} = require("./cast");
const {MovieSchema} = require("./movie");

const CharacterSchema = new mongoose.Schema(
    {
        name: { type: String},
        cast: [CastSchema],
        status: {type: Boolean, default: true}
    }  
);

const Character = mongoose.model("Character", CharacterSchema);

module.exports = {Character, CharacterSchema};