"use strict";


const mongoose = require('mongoose');
const productionService = require("../services/productionService");
const Country = mongoose.model('Country');

//ADD
exports.addProduction = async (req, res) => {
    const newProduction = {
        name: req.body.name,
        founder: req.body.founder,
        foundingdate: req.body.foundingdate,
        country: [ Country(
             {
                _id: new mongoose.Types.ObjectId(),
                name: req.body.country
             })
        ]
    }
    try{
        if (!req.body.name || !req.body.founder  || !req.body.foundingdate || !req.body.country ) {
            res
              .status(401)
              .send({ success: false, msg: "Please fillup required field." });
        }
         else {
            const productionExists = await productionService.checkExistProduction(req.body.name);
            if (productionExists) {
              return res
                .status(400)
                .send({ success: false, msg: "Production already exists" });
            }
        }

        const production = await productionService.addProduction(newProduction);
        res.status(201).json(production);
    }catch(err){
        res.status(500).json(err);
    }
}
