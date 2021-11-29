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
//GET
router.get("/find/:id", verifyToken, userController.find);
//GET ALL
router.get("/", verifyToken, userController.getall);
//GET USER STATS
router.get("/stats", verifyToken, userController.stats);
//ACTIVE EMAIL
router.post("/activation", userController.activeEmail);
//TOTAL USER
router.get("/total", userController.total);
//FORGOT PASS
router.post("/forgot", userController.forgot);
//RESET PASS
router.post("/reset", verifyToken, userController.reset);
//UPDATE PASS
router.put("/updatePassword", verifyToken, userController.updatePassword);
//GET ALL DELETED
router.get("/deleted", verifyToken, userController.getalldeleted);
//RECOVER
router.put("/recover/:id", verifyToken, userController.recover);
//REMOVE
router.delete("/remove/:id", verifyToken, userController.remove);

module.exports = router;
