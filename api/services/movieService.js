"use strict"

const {Movie, MovieSchema} = require("../models/movie");

class movieService{
    static async addMovie(data) {
        return await Movie(data).save();
    }
    static async findMovie(id){
        return await Movie.findOne( { _id: id });
    }
    static async checkExistMovie(title){
        return await Movie.findOne( { title });
    }
    static async updateMovie(id, data) {
        console.log(id, data);
        return await Movie.findByIdAndUpdate(id, { $set: data }, {new: true});
    }
    static async deleteMovie(id) {
        console.log(id);
        return await Movie.findByIdAndUpdate(id, { $set: {"status": false} }, {new: true});
    }
    static async getById(id) {
        return await Movie.findById(id);
      }
    static async getAll() {
        return await Movie.find({"status": true});
      }
    static async getAlllimit2() {
        return await Movie.find({"status": true}).limit(2);
      }
}

module.exports = movieService;