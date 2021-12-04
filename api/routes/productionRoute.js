"use strict";
const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const productionController = require("../controllers/productionController");

//ADD
router.post("/add",  productionController.addProduction);
//UPDATE
router.put("/update/:id", verifyToken, productionController.update);
//DELETE
router.put("/delete/:id", verifyToken, productionController.delete);
//GET
router.get("/find/:id", verifyToken, productionController.find);
//GET ALL
router.get("/", verifyToken, productionController.getall);

module.exports = router;