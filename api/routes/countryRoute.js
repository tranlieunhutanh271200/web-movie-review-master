"use strict";
const router = require("express").Router();
const countryController = require("../controllers/countryController");

//ADD
router.post("/add", countryController.addCountry);
//GET
router.get("/get", countryController.get);
//GET
router.get("/", countryController.getall);

module.exports = router;