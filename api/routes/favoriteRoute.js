"use strict";
const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const favoriteController = require("../controllers/favoriteController");

//ADD
router.post("/add", verifyToken, favoriteController.add);
//GET
router.get("/find",verifyToken, favoriteController.find);

module.exports = router;