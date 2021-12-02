"use strict"

const mongoose = require("mongoose");
const {Character, CharacterSchema} = require("../models/character");
const {Movie, MovieSchema} = require("../models/movie");

class characterService{
    static async addCharacter(data) {
        return await Character(data).save();
    }
    // static async checkExistCountry(name){
    //     return await Country.findOne( { name });
    // }
    static async getById(id){
        return await Character.findById( id );
    }
    static async deleteCharacter(id) {
        console.log(id);
        return await Character.findByIdAndUpdate(id, { $set: {"status": false} }, {new: true});
    }
    static async getAllInfomovie(id){
        return await Character.find({ "movie": mongoose.Types.ObjectId(id)})
        .populate('movie')
        .exec(function (err, docs) {
            //console.log(docs[0].branch.name);
            console.log(docs);
        });
    }
    static async getAll() {
        return await Character.find({"status": true});
      }
    static async getAlllimit2() {
        return await Character.find({"status": true}).limit(2);
      }
      static async updateCharacter(id, data) {
        //console.log(id, data);
        return await Character.findByIdAndUpdate(id, { $set: data }, {new: true});
    }
    static async checkExistCharacter(name){
        return await Character.findOne({name});
    }
    static async getAllMoviebyCast(id) {
        let list = [], arr = [], result = [];
        list = await Character.find({"cast._id": id});
        arr = list.map(this.getIdCharacter);
        console.log(arr.length);
        for (var i = 0; i < arr.length; i++){
            console.log(arr[i]);
            result.push(await Movie.find({"castItems.character": arr[i], "status": true}).populate("productionItems.production","_id name founder foundingdate").
            populate("categoryItems.category", "_id name").
            populate("castItems.character", "_id name cast"));
            console.log(result)
        }
        return await result
    }
    static getIdCharacter(item) {
        //console.log(item.name)
        return item._id
    }
}

module.exports = characterService;