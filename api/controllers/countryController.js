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