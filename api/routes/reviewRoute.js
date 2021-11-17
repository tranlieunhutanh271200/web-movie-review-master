"use strict";
const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const reviewController = require("../controllers/reviewController");

//ADD
router.post("/add", verifyToken, reviewController.addReview);
//UPDATE
router.put("/update", verifyToken, reviewController.update);
//DELETE
router.put("/delete", verifyToken, reviewController.delete);
//GET
router.get("/find/:id", reviewController.find);
//GET ALL
router.get("/",verifyToken, reviewController.getall);

module.exports = router;