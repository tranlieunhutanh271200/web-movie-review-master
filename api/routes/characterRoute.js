"use strict";
const router = require("express").Router();
const characterController = require("../controllers/characterController");
const verifyToken = require("../middlewares/verifyToken");

//ADD
router.post("/add", verifyToken, characterController.addCharacter);
//DELETE
router.put("/delete/:id", verifyToken, characterController.delete);
//GET
router.get("/find/:id", verifyToken, characterController.find);
//GET ALL
router.get("/", verifyToken, characterController.getall);
//UPDATE
router.put("/update/:id", verifyToken, characterController.update);

module.exports = router;