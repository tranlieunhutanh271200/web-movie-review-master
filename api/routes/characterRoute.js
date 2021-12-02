"use strict";
const router = require("express").Router();
const characterController = require("../controllers/characterController");
const verifyToken = require("../middlewares/verifyToken");

//ADD
router.post("/add", verifyToken, characterController.addCharacter);
//DELETE
router.put("/delete/:id", verifyToken, characterController.delete);
//GET
router.get("/find/:id", characterController.find);
//GET ALL
router.get("/", verifyToken, characterController.getall);
//UPDATE
router.put("/update/:id", verifyToken, characterController.update);
//GET MOVIE BY CAST
router.get("/getmoviebycast", characterController.getmoviebycast);

module.exports = router;