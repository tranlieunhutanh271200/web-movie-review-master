"use strict"

const {production, ProductionSchema}  = require("../models/production");

class productionService{
    static async addProduction(data) {
        return await production(data).save();
    }
    static async checkExistProduction(name){
        return await production.findOne({name});
    }
    static async updateProduction(id, data) {
        console.log(id, data);
        return await production.findByIdAndUpdate(id, { $set: data }, {new: true});
    }
    static async deleteProduction(id) {
        console.log(id);
        return await production.findByIdAndDelete(id);
    }
    static async getById(id) {
        return await production.findById(id);
      }
    static async getAll() {
        return await production.find({});
      }
    static async getAlllimit2() {
        return await production.find({}).limit(2);
      }
}

module.exports = productionService;