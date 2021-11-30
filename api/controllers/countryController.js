"use strict";

const countryService = require("../services/countryService");

//ADD
exports.addCountry = async (req, res) => {
    const newCountry = {
        name: req.body.name,
    }
    try{
        if (!req.body.name) {
            res
              .status(401)
              .send({ success: false, msg: "Please fillup required field." });
        } else {
            const countryExists = await countryService.checkExistCountry(req.body.name);
            if (countryExists) {
              return res
                .status(400)
                .send({ success: false, msg: "Country already exists" });
            }
        }
        const country = await countryService.addCountry(newCountry);
        //const user = await newUser.save();
        res.status(201).json(country);
    }catch(err){
        res.status(500).json(err);
    }
}

//GET
exports.get = async (req, res) => {
    //if(req.userExists.id === req.params.id || req.userExists.isAdmin){
      //console.log(req.userExists.isAdmin)
      try {
        const getCountry = await countryService.getById(req.params.id);
        // if(!findUser){
        //   res.status(403).json("User not found!")
        // }
        //const { password, ...info } = findUser._doc;
        res.status(200).json(getCountry);
      }catch(err){
        res.status(500).json(err);
      }
    // }
    // else{
    //   res.status(403).json("Only admin can get country")
    // }
  }
  
  exports.getall = async (req, res) => {
    //if(req.userExists.id === req.params.id || req.userExists.isAdmin){
      //console.log(req.userExists.isAdmin)
      try {
        const getCountry = await countryService.getAll();
        // if(!findUser){
        //   res.status(403).json("User not found!")
        // }
        //const { password, ...info } = findUser._doc;
        res.status(200).json(getCountry);
      }catch(err){
        res.status(500).json(err);
      }
    // }
    // else{
    //   res.status(403).json("Only admin can get country")
    // }
  }