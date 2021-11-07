"use strict";
const router = require("express").Router();
const characterController = require("../controllers/characterController");
const verifyToken = require("../middlewares/verifyToken");

//ADD
router.post("/add", verifyToken, characterController.addCharacter);

module.exports = router;