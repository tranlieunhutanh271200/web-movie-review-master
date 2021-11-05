"use strict";
const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const movieController = require("../controllers/movieController");

//ADD
router.post("/add", verifyToken, movieController.addMovie);
//UPDATE
// router.put("/update/:id", verifyToken, categoryController.update);
//DELETE
// router.delete("/delete/:id", verifyToken, categoryController.delete);
//GET
// router.get("/find/:id", verifyToken, categoryController.find);
//GET ALL
// router.get("/", verifyToken, categoryController.getall);

module.exports = router;