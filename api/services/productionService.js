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
}

module.exports = productionService;