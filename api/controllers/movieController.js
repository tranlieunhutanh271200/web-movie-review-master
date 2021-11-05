"use strict";

//const mongoose = require('mongoose');
const movieService = require("../services/movieService");
const productionService = require("../services/productionService");
const categoryService = require("../services/categoryService");
const countryService = require("../services/countryService");
// const Production = mongoose.model('Production');
// const Student = mongoose.model('Category');
// const Student = mongoose.model('Country');

//ADD
exports.addMovie = async (req, res) => {
    //const { name, founder, foundingdate } = req.body
    if (req.userExists.isAdmin) {
    const existProduct = await productionService.checkExistProduction(req.body.nameprod);
    const existCategory = await categoryService.checkExistCategory(req.body.namecate);
    const existCountry = await countryService.checkExistCountry(req.body.namecount);
    let product, cate, coun;

    if(existProduct){
        product = existProduct
    }
    else{
        product = {name: req.body.nameprod, founder:req.body.founder, foundingdate:req.body.foundingdate};
        await productionService.addProduction(product);
        product = existProduct;
    }
    if(existCategory){
        cate = existCategory;
    }
    else{
        cate = {name: req.body.namecate};
    }
    if(existCountry){
        coun = existCountry;
    }else{
        coun = {name: req.body.namecount};
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
            production: product,
            category: cate,
            country: coun
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
