"use strict";

const CryptoJS = require("crypto-js");
//const User = require("../models/User");
const userService = require("../services/userService");

exports.registration = async (req, res) => {
  const newUser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    dob: req.body.dob,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  }
  try {
    const user = await userService.registration(newUser);
    //const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}