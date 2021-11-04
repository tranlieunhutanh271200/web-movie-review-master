"use strict"

const Production = require("../models/production");

class productionService{
    static async addProduction(data) {
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
        return await Production(data).save();
    }
    static async checkExistProduction(name){
        return await Production.findOne( { name });
    }
    static async updateProduction(id, data) {
        console.log(id, data);
        return await Production.findByIdAndUpdate(id, { $set: data }, {new: true});
    }
    static async deleteProduction(id) {
        console.log(id);
        return await Production.findByIdAndDelete(id);
    }
    static async getById(id) {
        return await Production.findById(id);
      }
    static async getAll() {
        return await Production.find({});
      }
    static async getAlllimit2() {
        return await Production.find({}).limit(2);
      }
}

module.exports = productionService;