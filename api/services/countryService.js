"use strict"

const Country = require("../models/country");

class countryService{
    static async addCountry(data) {
        const countryData = new Country({
            name: data.name,
        });
        return await Country(countryData).save();
    }
    static async checkExistCountry(name){
        return await Country.findOne( { name });
    }
    static async getById(id){
        return await Country.findById( id );
    }
}

module.exports = countryService;