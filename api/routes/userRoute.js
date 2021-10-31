const router = require("express").Router();

const jwt = require("jsonwebtoken");
const userController = require("../controllers/userController")

//REGISTER
router.post("/register", userController.registration);

module.exports = router;
