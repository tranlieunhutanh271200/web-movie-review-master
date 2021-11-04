"use strict";
const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const productionController = require("../controllers/productionController");

//ADD
router.post("/add", verifyToken, productionController.addProduction);
//UPDATE
router.put("/update/:id", verifyToken, productionController.update);
//DELETE
router.delete("/delete/:id", verifyToken, productionController.delete);

module.exports = router;