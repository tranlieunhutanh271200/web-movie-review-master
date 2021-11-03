"use strict";
const router = require("express").Router();
const countryController = require("../controllers/countryController");

//ADD
router.post("/add", countryController.addCountry);
//GET
router.post("/get", countryController.get);

module.exports = router;