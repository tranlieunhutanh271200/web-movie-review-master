"use strict";

//const mongoose = require('mongoose');
const movieService = require("../services/movieService");
const productionService = require("../services/productionService");
const categoryService = require("../services/categoryService");
const countryService = require("../services/countryService");
const castService = require("../services/castService");
const characterService = require("../services/characterService");
const { Movie, MovieSchema } = require("../models/movie");
// const Production = mongoose.model('Production');
// const Student = mongoose.model('Category');
// const Student = mongoose.model('Country');

//ADD
exports.addMovie = async (req, res) => {
  //const { name, founder, foundingdate } = req.body
  if (req.userExists.isAdmin) {
    const existCountry = await countryService.checkExistCountry(req.body.namecount);
    const existCast = await castService.checkExistCast(req.body.castItems.namecast);
    const existCharacter = await characterService.checkExistCharacter(req.body.castItems.character);
    //console.log(req.body.castItems.character)
    //console.log(existCharacter);
    let coun, cast, char;

    if (existCharacter) {
      const isAddedCast = existCharacter.cast.find(ch => ch.name == req.body.castItems.namecast);
      //console.log(isAddedCast);
      if (isAddedCast) {
        char = existCharacter;
      } else {
        const { namecast, ...restCharacter } = req.body.castItems;
        //console.log(namecast)
        const { cast, ...rest } = existCharacter;
        const newCast = { name: namecast, bio: '', dob: Date.now() };
        await castService.addCast(newCast);
        const castCheck = await castService.checkExistCast(namecast);

        const addednewCast = cast.map(item => {
          item._id = castCheck._id;
          item.name = castCheck.name;
          item.bio = castCheck.bio;
          item.dob = castCheck.dob
          return item;
        });
        console.log(existCharacter.id);
        const updateChar = { ...restCharacter, cast: addednewCast }

        await characterService.updateCharacter(existCharacter.id, updateChar, { new: true });
        char = await characterService.checkExistCharacter(req.body.castItems.character);
      }
    } else {
      //const existCast = await castService.checkExistCast(req.body.castItems.namecast);
      //console.log(existMovie);
      if (existCast) {
        cast = existCast;
      }
      else {
        cast = { name: req.body.castItems.namecast };
        await castService.addCast(cast);
        cast = await castService.checkExistCast(req.body.castItems.namecast);
        //console.log(cast);
      }
      const newCharacter = {
        name: req.body.castItems.character,
        cast: cast,
      }
      await characterService.addCharacter(newCharacter);
      char = await characterService.checkExistCharacter(req.body.castItems.character);
    }

    //console.log(char.id);

    if (existCountry) {
      coun = existCountry;
    } else {
      coun = { name: req.body.namecount };
    }
    const movies = await movieService.checkExistMovie(req.body.title);
    if (movies) {
      const isCategoryAdded = movies.categoryItems.find(ca => ca.category == req.body.categoryItems.category);
      //console.log(movies.categoryItems.find(ca => ca.category == req.body.categoryItems.category));
      const checkCharacter = await characterService.checkExistCharacter(req.body.castItems.character);
      const isProductionAdded = movies.productionItems.find(pr => pr.production == req.body.productionItems.production);
      const isCharacterAdded = movies.castItems.find(pr => pr.character == checkCharacter.id);
      console.log(isCharacterAdded)
      const isCate = req.body.categoryItems.category;
      const isProduction = req.body.productionItems.production;
      //console.log(isProductionAdded)

      if (isCharacterAdded && isProductionAdded && isCategoryAdded) {
        try {
          const reviewprod = await movieService.checkExistMovieProductionandUpdate(req.body.title, isProduction, {
            production: req.body.productionItems.production,
          }
            , { new: true });
          //console.log(review)
          const reviewcate = await movieService.checkExistMovieCategoryandUpdate(req.body.title, isCate, {
            category: req.body.categoryItems.category,
          }
            , { new: true });
          //console.log(review)
          res.status(201).json(reviewcate);
        } catch (err) {
          res.status(500).json(err);
        }
      }
      if (isCharacterAdded && isProductionAdded && !isCategoryAdded) {
        try {
          const reviewprod = await movieService.checkExistMovieProductionandUpdate(req.body.title, isProduction, {
            production: req.body.productionItems.production,
          }
            , { new: true });
          //console.log(review)
          const reviewcate = await movieService.checkExistCategoryandUpdate(req.body.title, {
            "categoryItems": req.body.categoryItems,
          }
            , { new: true });
          //console.log(review)
          res.status(201).json(reviewcate);
        } catch (err) {
          res.status(500).json(err);
        }
      }
      else if (isCharacterAdded && !isProductionAdded && isCategoryAdded) {
        try {
          const reviewcate = await movieService.checkExistMovieCategoryandUpdate(req.body.title, isCate, {
            category: req.body.categoryItems.category,
          }
            , { new: true });
          //console.log(review)
          const reviewprod = await movieService.checkExistCategoryandUpdate(req.body.title, {
            "productionItems": req.body.productionItems
          }
            , { new: true });
          //console.log(review)
          res.status(201).json(reviewprod);
        } catch (err) {
          res.status(500).json(err);
        }
      }
      else if (!isCharacterAdded && isProductionAdded && isCategoryAdded) {
        try {
          const reviewcate = await movieService.checkExistMovieCategoryandUpdate(req.body.title, isCate, {
            category: req.body.categoryItems.category,
          }
            , { new: true });
          const reviewprod = await movieService.checkExistMovieProductionandUpdate(req.body.title, isProduction, {
            production: req.body.productionItems.production,
          }
            , { new: true });
          //console.log(review)
          const reviewcast = await movieService.checkExistCategoryandUpdate(req.body.title, {
            "castItems": [{
              character: char.id,
            }],
          }
            , { new: true });
          res.status(201).json(reviewcast);
        } catch (err) {
          res.status(500).json(err);
        }
      }
      else if (!isCharacterAdded && !isProductionAdded && isCategoryAdded) {
        try {
          const reviewcate = await movieService.checkExistMovieCategoryandUpdate(req.body.title, isCate, {
            category: req.body.categoryItems.category,
          }
            , { new: true });
          const reviewprod = await movieService.checkExistCategoryandUpdate(req.body.title, {
            "productionItems": req.body.productionItems
          }
            , { new: true });
          const reviewcast = await movieService.checkExistCategoryandUpdate(req.body.title, {
            "castItems": [{
              character: char.id,
            }],
          }
            , { new: true });
          //console.log(review)

          res.status(201).json(reviewcast);
        } catch (err) {
          res.status(500).json(err);
        }
      }
      else if (!isCharacterAdded && isProductionAdded && !isCategoryAdded) {
        try {
          const reviewprod = await movieService.checkExistMovieProductionandUpdate(req.body.title, isProduction, {
            production: req.body.productionItems.production,
          }
            , { new: true });
          const reviewcate = await movieService.checkExistCategoryandUpdate(req.body.title, {
            "categoryItems": req.body.categoryItems,
          }
            , { new: true });
          const reviewcast = await movieService.checkExistCategoryandUpdate(req.body.title, {
            "castItems": [{
              character: char.id,
            }],
          }
            , { new: true });
          //console.log(review)

          res.status(201).json(reviewcast);
        } catch (err) {
          res.status(500).json(err);
        }
      }
      else if (isCharacterAdded && !isProductionAdded && !isCategoryAdded) {
        try {
          const reviewcate = await movieService.checkExistCategoryandUpdate(req.body.title, {
            "categoryItems": req.body.categoryItems,
          }
            , { new: true });
          const reviewprod = await movieService.checkExistCategoryandUpdate(req.body.title, {
            "productionItems": req.body.productionItems
          }
            , { new: true });
          //console.log(review)
          res.status(201).json(reviewprod);
        } catch (err) {
          res.status(500).json(err);
        }
      }
      if (!isProductionAdded && !isCategoryAdded && !isCharacterAdded) {
        try {
          const review = await movieService.checkExistCategoryandUpdate(req.body.title, {
            "categoryItems": req.body.categoryItems,
            "productionItems": req.body.productionItems,
            "castItems": [{
              character: char.id,
            }],
          }
            , { new: true });
          //console.log(review)
          res.status(201).json(review);
        } catch (err) {
          res.status(500).json(err)
        }
      }
    }
    else {
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
        productionItems: req.body.productionItems,
        categoryItems: req.body.categoryItems,
        castItems: [{
          character: char.id,
        }],
        country: coun
      }
      //console.log(req.body.productionItems);
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
    }
  } else {
    res.status(403).json("Only admin can add Cast")
  }
}
//GET
exports.find = async (req, res) => {
  // try {
  //   const findMovie = await movieService.getById(req.params.id);
  //   if (!findMovie) {
  //     res.status(403).json("Movie not found!")
  //   }
  //   //const { password, ...info } = findUser._doc;
  //   res.status(200).json(findMovie);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
  try {
    const findMovie = await movieService.getById(req.params.id);
    //console.log(findReview);

    if (!findMovie) {
      res.status(403).json("Review not found!")
    }
    if (findMovie) {
      let productionItems = {}, categoryItems = {}, castItems = {};
      findMovie.productionItems.forEach((item, index) => {
        productionItems[item.production._id.toString()] = {
          _id: item.production._id.toString(),
          name: item.production.name,
          founder: item.production.founder,
          foudingdate: item.production.foudingdate,
        }
      });
      findMovie.categoryItems.forEach((item, index) => {
        categoryItems[item.category._id.toString()] = {
          _id: item.category._id.toString(),
          name: item.category.name,
        }
      });
      findMovie.castItems.forEach((item, index) => {
        castItems[item.character._id.toString()] = {
          _id: item.character._id.toString(),
          name: item.character.name,
          cast: item.character.cast
        }
      });
      res.status(200).json(findMovie);
    }

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
      res.status(403).json("Review not found!")
    }
    if (findAllMovie) {
      res.status(200).json(findAllMovie);
    }
    //const { password, ...info } = findAllUser._doc;
  } catch (err) {
    res.status(500).json(err);
  }
}
//UPDATE
exports.update = async (req, res) => {
  if (req.userExists.isAdmin) {
    try {
      // const { namecount, ...restMovie } = req.body;
      // const movie = await movieService.findMovie(req.params.id);
      // const {country, ...rest } = movie;
      // console.log(movie)
      // const countryCheck = await countryService.checkExistCountry(namecount);
      // if (!countryCheck) {
      //   const newCountry = { name: namecount };
      //   await countryService.addCountry(newCountry);
      //   countryCheck = await countryService.checkExistCountry(namecount);
      // }
      // const newCountry = country.map(item => {
      //   item._id = countryCheck._id;
      //   item.name = countryCheck.name;
      //   return item;
      // })
      // //console.log(newProduction);
      // const updateAll = { ...restMovie, country: newCountry }

      const test = await movieService.updateMovie(req.params.id, req.body, { new: true });
      res.status(200).json(test);
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
exports.deleteItem = async (req, res) => {
  try {
    const test = await Movie.findOneAndUpdate(
      { _id : req.params.id }
      , {
        $pull: {
          productionItems: {
            production: req.body.production,
          },
          categoryItems: {
            category: req.body.category,
          },
          castItems: {
            character: req.body.character,
          }
        }
      }
    );
    res.status(200).json(test);
  } catch (err) {
    res.status(500).json(err);
  }
}
exports.getmoviebygerne = async (req, res) => {
  try {
    console.log(req.params.id)
    const data = await movieService.getAllMoviebyGener(req.params.id);
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err);
  }
}
exports.getmoviebyproduction = async (req, res) => {
  try {
    console.log(req.params.id)
    const data = await movieService.getAllMoviebyProduction(req.params.id);
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err);
  }
}
//COUNT USER
exports.total = async (req, res) => {
  try {
    const data = await movieService.count();
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
}
//GET ALL DELETED
exports.getalldeleted = async (req, res) => {
  const query = req.query.new;
  if (req.userExists.isAdmin) {
    //console.log(req.userExists.isAdmin)
    try {
      const findAllUser = query ? await movieService.getAllDeletedlimit2() : await movieService.getAllDeleted();
      if (!findAllUser) {
        res.status(403).json("Sorry! We don't have any users here!")
      }
      //const { password, ...info } = findAllUser._doc;
      res.status(200).json(findAllUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  else {
    res.status(403).json("You are not allowed to see all users!")
  }
}
//RECOVER
exports.recover = async (req, res) => {
  if (req.userExists.isAdmin) {
    console.log(req.userExists.isAdmin)
    try {
      const restoredUser = await movieService.recover(req.params.id);
      if (!restoredUser) {
        res.status(403).json("Movie not found!")
      }
      res.status(200).json("Movie has been restored...");
    } catch (err) {
      res.status(500).json(err);
    }
  }
  else {
    res.status(403).json("Only admin can restore movie!")
  }
}
//PERMANENTLY DELETE
exports.remove = async (req, res) => {
  if (req.userExists.isAdmin) {
    console.log(req.userExists.isAdmin)
    try {
      const removedUser = await movieService.remove(req.params.id);
      if (!removedUser) {
        res.status(403).json("Movie not found!")
      }
      res.status(200).json("Movie has been removed...");
    } catch (err) {
      res.status(500).json(err);
    }
  }
  else {
    res.status(403).json("Only admin can remove movie!")
  }
}