"use strict"

const {Character, CharacterSchema} = require("../models/character");

class characterService{
    static async addCharacter(data) {
        return await Character(data).save();
    }
    // static async checkExistCountry(name){
    //     return await Country.findOne( { name });
    // }
    // static async getById(id){
    //     return await Country.findById( id );
    // }
}

module.exports = characterService;