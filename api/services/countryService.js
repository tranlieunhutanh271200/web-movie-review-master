"use strict"

const {Country, CountrySchema} = require("../models/country");

class countryService{
    static async addCountry(data) {
        // const countryData = new Country({
        //     name: data.name,
        // });
        return await Country(data).save();
    }
    static async checkExistCountry(name){
        return await Country.findOne( { name });
    }
    static async getById(id){
        return await Country.findById( id );
    }
    static async getAll(id){
        return await Country.find({});
    }
}

module.exports = countryService;