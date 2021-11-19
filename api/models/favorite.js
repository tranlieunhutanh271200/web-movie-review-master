const mongoose = require("mongoose");

const { UserSchema } = require("./user");
const { MovieSchema } = require("./movie");

const FavoriteSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        favoriteItems: [
            {
                movie: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Movie",
                },
                status: { type: Boolean, default: true },
            }
        ]

    },
    { timestamps: true }
);

const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = { Favorite, FavoriteSchema };