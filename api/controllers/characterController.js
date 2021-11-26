"use strict";

const mongoose = require('mongoose');
const characterService = require("../services/characterService");
const castService = require("../services/castService");
const movieService = require("../services/movieService");
const { Character } = require('../models/character');
//const {Movie, MovieSchema} = require("../models/movie");
//const Country = mongoose.model('Country');

//ADD
exports.addCharacter = async (req, res) => {
    if(req.userExists.isAdmin){
        const existCast = await castService.checkExistCast(req.body.namecast);
        //console.log(existMovie);
        let cast;
        if(existCast){
            cast = existCast;
        }
        else{ 
            cast = {name: req.body.namecast};
            await castService.addCast(cast);
            cast = await castService.checkExistCast(req.body.namecast);
            console.log(cast);
        }
    const newCharacter = {
        name: req.body.name,
        cast: cast,
    }
    try{
        if (!req.body.name) {
            res
              .status(401)
              .send({ success: false, msg: "Please fillup required field." });
        }
        const character = await characterService.addCharacter(newCharacter);
        res.status(201).json(character);
    }catch(err){
        res.status(500).json(err);
    }
}else{
    res.status(403).json("Only admin can add Cast")
}
}
//DELETE
exports.delete = async (req, res) => {
    if(req.userExists.isAdmin){
      console.log(req.userExists.isAdmin)
      try {
        const deletedCharacter = await characterService.deleteCharacter(req.params.id);
        if(!deletedCharacter){
          res.status(403).json("Character not found!")
        }
        res.status(200).json("Character has been deleted...");
      }catch(err){
        res.status(500).json(err);
      }
    }
    else{
      res.status(403).json("Only admin can delete Character!")
    }
  }
//FIND
exports.find = async (req, res) => {
  if(req.userExists.isAdmin){
    //console.log(req.userExists.isAdmin)
    try {
      const findCharacter = await characterService.getById(req.params.id);
      if(!findCharacter){
        res.status(403).json("Character not found!")
      }
      //const { password, ...info } = findUser._doc;
      res.status(200).json(findCharacter);
    }catch(err){
      res.status(500).json(err);
    }
  }
  else{
    res.status(403).json("Only admin can find users")
  }
}
//GET ALL
exports.getall = async (req, res) => {
  const query = req.query.new;
  //console.log(req.userExists.isAdmin)
  try {
    const findAllCharacter = query ? await characterService.getAlllimit2() : await characterService.getAll();
    console.log(findAllCharacter);
    if (!findAllCharacter) {
      res.status(403).json("Sorry! We don't have any character here!")
    }
    //const { password, ...info } = findAllUser._doc;
    res.status(200).json(findAllCharacter);
  } catch (err) {
    res.status(500).json(err);
  }
}
//UPDATE
exports.update = async (req, res) => {
  if (req.userExists.isAdmin) {
    try {
      const {namecast, ...restCharacter } = req.body;

      //console.log(namecast)
      const character = await characterService.getById(req.params.id);
      const { cast, ...rest } = character;

      const castCheck = await castService.checkExistCast(namecast);
      //console.log(castCheck);
      if (!castCheck) {
        const newCast = { name: namecast, bio: '', dob: Date.now() };
        await castService.addCast(newCast);
        castCheck = await castService.checkExistCast(namecast);
      }

      //console.log(productionCheck);
      const newCast = cast.map(item => {
        item._id = castCheck._id;
        item.name = castCheck.name;
        item.bio = castCheck.bio;
        item.dob = castCheck.dob
        return item;
      })
      console.log(newCast)
      //console.log(newProduction);
      const updateAll = { ...restCharacter, cast: newCast}

      await characterService.updateCharacter(req.params.id, updateAll , {new: true});
      res.status(200).json(character);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  else {
    res.status(403).json("Only admin can change Movies")
  }
}
//GET MOVIE CAST
exports.getmoviebycast = async (req, res) => {
  try {
    //console.log(req.params.id)
    const data = await characterService.getAllMoviebyCast(req.body.cast);
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err);
  }
}