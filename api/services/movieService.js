"use strict"

const {Movie, MovieSchema} = require("../models/movie");

class movieService{
    static async addMovie(data) {
        return await Movie(data).save();
    }
    static async findProduction(name){
        return await Movie.findOne( { name });
    }
    // static async checkExistMovie(name){
    //     return await Movie.findOne( { name });
    // }
    // static async updateCast(id, data) {
    //     console.log(id, data);
    //     return await Cast.findByIdAndUpdate(id, { $set: data }, {new: true});
    // }
    // static async deleteMovie(id) {
    //     console.log(id);
    //     return await Movie.findByIdAndDelete(id);
    // }
    // static async getById(id) {
    //     return await Movie.findById(id);
    //   }
    // static async getAll() {
    //     return await Movie.find({});
    //   }
    // static async getAlllimit2() {
    //     return await Movie.find({}).limit(2);
    //   }
}

module.exports = movieService;