"use strict";
const router = require("express").Router();
const productionController = require("../controllers/productionController");

//ADD
router.post("/add", productionController.addProduction);
//GET
//router.post("/get", countryController.get);

module.exports = router;