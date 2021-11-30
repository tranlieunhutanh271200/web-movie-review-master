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
        //console.log(name)
        return await Cast.findOne( { name });
    }
    static async updateCast(id, data) {
        console.log(id, data);
        return await Cast.findByIdAndUpdate(id, { $set: data }, {new: true});
    }
    static async deleteCast(id) {
        console.log(id);
        return await Cast.findByIdAndUpdate(id, { $set: {"status": false} }, {new: true});
    }
    static async getById(id) {
        return await Cast.findById(id);
      }
    static async getAll() {
        return await Cast.find({"status": true});
      }
    static async getAlllimit2() {
        return await Cast.find({"status": true}).limit(2);
      }
    static async count(){
        return await Cast.find({"status": true}).countDocuments();
    }
    static async getAllDeleted() {
        return await Cast.find({"status": false});
      }
      static async getAllDeletedlimit2() {
        return await Cast.find({"status": false}).limit(2);
      }
      static async recoverUser(id) {
        console.log(id);
        return await Cast.findByIdAndUpdate(id, { $set: {"status": true} }, {new: true});
      }
      static async removeUser(id) {
        console.log(id);
        return await Cast.findByIdAndRemove(id);
      }
}

module.exports = castService;