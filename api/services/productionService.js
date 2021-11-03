"use strict"

const Production = require("../models/production");

class productionService{
    static async addProduction(data) {
        const productionData = new Production({
            name: data.name,
            founder: data.founder,
            foundingdate: data.foundingdate,
            country: data.country
        });
        console.log(productionData);
        return await Production(productionData).save();
    }
    static async checkExistProduction(name){
        return await Production.findOne( { name });
    }
}

module.exports = productionService;