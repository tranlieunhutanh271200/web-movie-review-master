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

    if (existProduct) {
      product = existProduct
    }
    else {
      product = { name: req.body.nameprod, founder: req.body.founder, foundingdate: req.body.foundingdate };
      await productionService.addProduction(product);
      product = await productionService.checkExistProduction(req.body.nameprod);
      console.log(product);
    }
    if (existCategory) {
      cate = existCategory;
    }
    else {
      cate = { name: req.body.namecate };
    }
    if (existCountry) {
      coun = existCountry;
    } else {
      coun = { name: req.body.namecount };
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
//FIND
exports.find = async (req, res) => {
  try {
    const findMovie = await movieService.getById(req.params.id);
    if (!findMovie) {
      res.status(403).json("Movie not found!")
    }
    //const { password, ...info } = findUser._doc;
    res.status(200).json(findMovie);
  } catch (err) {
    res.status(500).json(err);
  }
}
//GET ALL MOVIE
exports.getall = async (req, res) => {
  const query = req.query.new;
  //console.log(req.userExists.isAdmin)
  try {
    const findAllMovie = query ? await movieService.getAlllimit2() : await movieService.getAll();
    console.log(findAllMovie);
    if (!findAllMovie) {
      res.status(403).json("Sorry! We don't have any movie here!")
    }
    //const { password, ...info } = findAllUser._doc;
    res.status(200).json(findAllMovie);
  } catch (err) {
    res.status(500).json(err);
  }S
}
//UPDATE
exports.update = async (req, res) => {
  if (req.userExists.isAdmin) {
    try {
      const { nameprod, namecount, namecate, ...restMovie } = req.body;
      console.log(nameprod, namecount, namecate)

      const movie = await movieService.findMovie(req.params.id);
      const { production, category, country, ...rest } = movie;

      const productionCheck = await productionService.checkExistProduction(nameprod);
      const countryCheck = await countryService.checkExistCountry(namecount);
      const categoryCheck = await categoryService.checkExistCategory(namecate);
      console.log(categoryCheck);
      if (!productionCheck) {
        const newProduction = { name: nameprod, founder: '', foundingdate: Date.now() };
        await productionService.addProduction(newProduction);
        productionCheck = await productionService.checkExistProduction(nameprod);
      }
      if(!countryCheck){
        const newCountry = {name: namecount};
        await countryService.addCountry(newCountry);
        countryCheck = await countryService.checkExistCountry(namecount);
      }
      if(!categoryCheck){
        const newCategory = {name: namecate};
        await categoryService.addCategory(newCategory);
        categoryCheck = await categoryService.checkExistCategory(namecate);
      }

      //console.log(productionCheck);
      const newProduction = production.map(item => {
        item._id = productionCheck._id;
        item.name = productionCheck.name;
        return item;
      })
      const newCategory = category.map(item => {
        item._id = categoryCheck._id;
        item.name = categoryCheck.name;
        return item;
      })
      const newCountry = country.map(item => {
        item._id = countryCheck._id;
        item.name = countryCheck.name;
        return item;
      })
      //console.log(newProduction);
      const updateAll = { ...restMovie, production: newProduction}

      await movieService.updateMovie(req.params.id, updateAll , {new: true});
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  else {
    res.status(403).json("Only admin can change Movies")
  }
}
//DELETE
exports.delete = async (req, res) => {
  if (req.userExists.isAdmin) {
    console.log(req.userExists.isAdmin)
    try {
      const deletedMovie = await movieService.deleteMovie(req.params.id);
      if (!deletedMovie) {
        res.status(403).json("Movie not found!")
      }
      res.status(200).json("Movie has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }
  else {
    res.status(403).json("Only admin can delete movie!")
  }
}