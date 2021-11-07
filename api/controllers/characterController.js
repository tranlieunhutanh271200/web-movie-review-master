"use strict";

const mongoose = require('mongoose');
const characterService = require("../services/characterService");
const castService = require("../services/castService");
const movieService = require("../services/movieService");
//const {Movie, MovieSchema} = require("../models/movie");
//const Country = mongoose.model('Country');

//ADD
exports.addCharacter = async (req, res) => {
    if(req.userExists.isAdmin){
        const existCast = await castService.checkExistCast(req.body.namecast);
        const existMovie = await movieService.checkExistMovie(req.body.title);
        //console.log(existMovie);
        let cast, movie;
        if(existCast){
            cast = existCast;
        }
        else{ 
            cast = {name: req.body.namecast};
            await castService.addCast(cast);
            cast = await castService.checkExistCast(req.body.namecast);
            console.log(cast);
        }
        if(existMovie){
            movie = existMovie;
        }
        else{
            movie = {title: req.body.title};
            await movieService.addMovie(movie);
            movie = await movieService.checkExistMovie(req.body.title);
           
        }
        console.log(movie);
    const newCharacter = {
        name: req.body.name,
        movie: {
            _id: movie._id,
        },
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
