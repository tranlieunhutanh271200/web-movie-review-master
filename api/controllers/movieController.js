"use strict";

//const mongoose = require('mongoose');
const movieService = require("../services/movieService");
const productionService = require("../services/productionService");
// const Production = mongoose.model('Production');
// const Student = mongoose.model('Category');
// const Student = mongoose.model('Country');

//ADD
exports.addMovie = async (req, res) => {
    //const { name, founder, foundingdate } = req.body
    if (req.userExists.isAdmin) {
    const existProduct = await productionService.checkExistProduction(req.body.name);
    let product;

    if(existProduct){
        product = existProduct
    }
    else{
        product = {name: req.body.name, founder:req.body.founder, foundingdate:req.body.foundingdate};
        await productionService.addProduction(product);
    }
    //const newProduction = await productionService.addProduction({product});   
        const newMovie = {
            title: req.body.title,
            releaseDate: req.body.releaseDate,
            namePic: req.body.namePic,
            coverPic: req.body.coverPic,
            rating: req.body.rating,
            img: req.body.img,
            trailer: req.body.trailer,
            desc: req.body.desc,
            limit: req.body.limit,
            site: req.body.site,
            production: product
            // category: [{
            //     name: req.body.category,
            // }],
            // country: [{
            //     name: req.body.country,
            // }]
        }
        console.log(newMovie);
        try {
            if (!req.body.title || !req.body.releaseDate || !req.body.desc || !req.body.limit ||
                !req.body.site) {
                res
                    .status(401)
                    .send({ success: false, msg: "Please fillup required field." });
            }
            //await productionService.addProduction(product);
            const movie = await movieService.addMovie(newMovie);
            res.status(201).json(movie);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Only admin can add Cast")
    }
}
