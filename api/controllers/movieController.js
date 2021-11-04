"use strict";

//const mongoose = require('mongoose');
const movieService = require("../services/movieService");
//const Country = mongoose.model('Country');

//ADD
exports.addMovie = async (req, res) => {
    if(req.userExists.isAdmin){
    const newMovie = {
        name: req.body.name,
        bio: req.body.bio,
        dob: req.body.dob,
        castPic: req.body.castPic
    }
    try{
        if (!req.body.name) {
            res
              .status(401)
              .send({ success: false, msg: "Please fillup required field." });
        }
        const cast = await castService.addCast(newCast);
        res.status(201).json(cast);
    }catch(err){
        res.status(500).json(err);
    }
}else{
    res.status(403).json("Only admin can add Cast")
}
}
