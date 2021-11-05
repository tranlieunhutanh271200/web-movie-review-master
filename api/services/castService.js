"use strict"

const {Cast, CastSchema} = require("../models/cast");

class castService{
    static async addCast(data) {
        // const productionData = new Production({
        //     name: data.name,
        //     founder: data.founder,
        //     foundingdate: data.foundingdate,
        //     country: [
        //         {
        //         _id: new mongoose.Types.ObjectId(),
        //         name: data.country
        //         }
        //         ]
        // });
        //console.log(data);
        return await Cast(data).save();
    }
    static async checkExistCast(name){
        return await Cast.findOne( { name });
    }
    static async updateCast(id, data) {
        console.log(id, data);
        return await Cast.findByIdAndUpdate(id, { $set: data }, {new: true});
    }
    static async deleteCast(id) {
        console.log(id);
        return await Cast.findByIdAndDelete(id);
    }
    static async getById(id) {
        return await Cast.findById(id);
      }
    static async getAll() {
        return await Cast.find({});
      }
    static async getAlllimit2() {
        return await Cast.find({}).limit(2);
      }
}

module.exports = castService;