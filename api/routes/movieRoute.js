"use strict";
const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const movieController = require("../controllers/movieController");

//ADD
router.post("/add", verifyToken, movieController.addMovie);
//UPDATE
router.put("/update/:id", verifyToken, movieController.update);
//DELETE
router.put("/delete/:id", verifyToken, movieController.delete);
//GET
router.get("/find/:id", movieController.find);
//GET ALL
router.get("/", movieController.getall);
//DELETE ITEM
router.put("/deleteItem/:id", verifyToken, movieController.deleteItem);
//GET ALL MOVIE BY GERNE
router.get("/getmoviebygerne/:id", movieController.getmoviebygerne);
//GET ALL MOVIE BY PRODUCTION
router.get("/getmoviebyproduction/:id", movieController.getmoviebyproduction);
//TOTAL MOVIE
router.get("/total", movieController.total);

module.exports = router;