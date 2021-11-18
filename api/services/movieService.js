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
        //console.log(id, data);
        return await Movie.findByIdAndUpdate(id, 
            { $set: {
                "title": data.title,
                "desc": data.desc,
                "releaseDate": data.releaseDate,
                "limit": data.limit,
                "site": data.site
            } }, {new: true});
    }
    static async deleteMovie(id) {
        console.log(id);
        return await Movie.findByIdAndUpdate(id, { $set: {"status": false} }, {new: true});
    }
    static async getById(id) {
        return await Movie.findById(id).
        populate("productionItems.production","_id name founder foundingdate").
        populate("categoryItems.category", "_id name").
        populate("castItems.character", "_id name cast");
      }
    static async getAll() {
        return await Movie.find({"status": true}).
        populate("productionItems.production","_id name founder foundingdate").
        populate("categoryItems.category", "_id name").
        populate("castItems.character", "_id name cast");
      }
    static async getAlllimit2() {
        return await Movie.find({"status": true}).limit(2).
        populate("productionItems.production","_id name founder foundingdate").
        populate("categoryItems.category", "_id name").
        populate("castItems.character", "_id name cast");
      }
      static async checkExistMovieCategoryandUpdate(title, cate, data){
        //console.log(cate, title, data)
        return await Movie.findOneAndUpdate({"title": title, "categoryItems.category": cate}, {$set: {"categoryItems.$": data}}, {new: true});
    }
    static async checkExistMovieProductionandUpdate(title, cate, data){
        //console.log(cate, title, data)
        return await Movie.findOneAndUpdate({"title": title, "productionItems.production": cate}, {$set: {"productionItems.$": data}}, {new: true});
    }
    static async checkExistCategoryandUpdate(title, data){
        //console.log(title, data)
        return await Movie.findOneAndUpdate({title}, {"$push": data}, {new: true});
    }
}

module.exports = movieService;