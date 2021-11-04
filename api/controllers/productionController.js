"use strict";

//const mongoose = require('mongoose');
const productionService = require("../services/productionService");
//const Country = mongoose.model('Country');

//ADD
exports.addProduction = async (req, res) => {
    if(req.userExists.isAdmin){
    const newProduction = {
        name: req.body.name,
        founder: req.body.founder,
        foundingdate: req.body.foundingdate,
        // country: 
        //      {
        //         _id: new mongoose.Types.ObjectId(),
        //         name: req.body.country
        //      }
    }
    try{
        if (!req.body.name || !req.body.founder  || !req.body.foundingdate) {
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
}else{
    res.status(403).json("Only admin can change Production")
}
}
exports.update = async (req, res) => {
    if(req.userExists.isAdmin){
      if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(
          req.body.password,
          process.env.SECRET_KEY
        ).toString();
      }
      //console.log(req.params.id, req.body);
  
      try {
        const updatedProduction = await productionService.updateProduction(req.params.id, req.body, {new: true});  
        res.status(200).json(updatedProduction);
      }catch(err){
        res.status(500).json(err);
      }
    }
    else{
      res.status(403).json("Only admin can change Production")
    }
  }
//DELETE
exports.delete = async (req, res) => {
    if(req.userExists.isAdmin){
      console.log(req.userExists.isAdmin)
      try {
        const deletedProduction = await productionService.deleteProduction(req.params.id);
        if(!deletedProduction){
          res.status(403).json("Production not found!")
        }
        res.status(200).json("Production has been deleted...");
      }catch(err){
        res.status(500).json(err);
      }
    }
    else{
      res.status(403).json("Only admin can delete production!")
    }
  }