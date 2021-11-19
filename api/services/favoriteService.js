"use strict"

const {Favorite, FavoriteSchema} = require("../models/favorite");

class FavoriteService{
    static async addFavorite(data) {
        return await Favorite(data).save();
    }
    static async checkExistFavorite(name){
        return await Favorite.findOne( { name });
    }
    static async checkExistUser(user){
        return await Favorite.findOne({user});
    }
    static async checkExistUserandUpdate(user, data){
        console.log(data)
        return await Favorite.findOneAndUpdate({user}, {"$push": data}, {new: true});
    }
    static async checkExistMovieUserandUpdate(user, movie, data){
        console.log(user, movie, data)
        return await Favorite.findOneAndUpdate({"user": user, "favoriteItems.movie": movie}, {$set: {"favoriteItems.$": data}}, {new: true});
    }
    // static async updateFavorite(id, data) {
    //     console.log(id, data);
    //     return await Favorite.findByIdAndUpdate(id, { $set: {"text": data.text, "rating": data.rating } }, {new: true});
    // }
    static async deleteFavorite(user, movie) {
        //console.log(id);
        return await Favorite.findOneAndDelete({"user": user, "favoriteItems.movie": movie});
    }
    static async getFavoritebyUser(user) {
        //console.log(movie)
        return await Favorite.findOne({ user })
            .populate("favoriteItems.movie", "_id title img limit trailer releaseDate");
      }
    // static async getAll() {
    //     return await Favorite.find({});
    //   }
    // static async getAlllimit2() {
    //     return await Favorite.find({}).limit(2);
    //   }
}

module.exports = FavoriteService;