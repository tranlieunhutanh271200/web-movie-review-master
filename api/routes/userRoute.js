"use strict";
const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");

const jwt = require("jsonwebtoken");
const userController = require("../controllers/userController")

//REGISTER
router.post("/register", userController.registration);
//LOGIN
router.post("/login", userController.login);
//UPDATE
router.put("/update/:id", verifyToken, userController.update);
//DELETE
router.put("/delete/:id", verifyToken, userController.delete);

module.exports = router;
