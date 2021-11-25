"use strict"

const mongoose = require("mongoose");
const {Review, ReviewSchema} = require("../models/Review");

class reviewService{
    static async addReview(data) {
        return await Review(data).save();
    }
    static async checkExistReview(name){
        return await Review.findOne( { name });
    }
    static async checkExistMovie(movie){
        return await Review.findOne({movie});
    }
    static async checkExistMovieandUpdate(movie, data){
        console.log(data)
        return await Review.findOneAndUpdate({movie}, {"$push": data}, {new: true});
    }
    static async checkExistMovieUserandUpdate(movie, user, data){
        console.log(user, movie, data)
        return await Review.findOneAndUpdate({"movie": movie, "reviewItems.user": user}, {$set: {"reviewItems.$": data}}, {new: true});
    }
    static async updateReview(id, data) {
        console.log(id, data);
        return await Review.findByIdAndUpdate(id, { $set: {"text": data.text, "rating": data.rating } }, {new: true});
    }
    static async deleteReview(movie, user) {
        //console.log(id);
        return await Review.findOneAndDelete({"movie": movie, "reviewItems.user": user});
    }
    static async getReviewbyMovie(movie) {
        //console.log(movie)
        return await Review.findOne({ movie })
            .populate("reviewItems.user", "_id firstname lastname profilePic");
      }
    static async getAll() {
        return await Review.find({});
      }
    static async getAlllimit2() {
        return await Review.find({}).limit(2);
      }

    static async getRating(id) {
        const a = await Review.findOne({movie: id});
        //console.log("=========",a)
        let list = [];
        list = a.reviewItems;
        //console.log("abc", list);
        const valueRating = await (await this.getAverage(list)).toFixed(1);
        //console.log("object", b)
        return await valueRating;
    }
    static getAverage = async (arr) => {
        const reducer = (total, reviewItems) => total + reviewItems.rating;
        const sum = arr.reduce(reducer, 0);
        return sum / arr.length;
    }
}

module.exports = reviewService;