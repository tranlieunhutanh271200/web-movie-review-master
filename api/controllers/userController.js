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
    if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.dob || !req.body.password) {
      res
        .status(401)
        .send({ success: false, msg: "Please fillup required field." });
    } else if (req.body.password.length < 6) {
      return res.status(401).send({
        success: false,
        msg: "Password must be at least 6 characters.",
      });
    }else {
      const userExists = await userService.checkEmailExist(req.body.email);
      if (userExists) {
        return res
          .status(400)
          .send({ success: false, msg: "Email already exists" });
      }
    }
    const user = await userService.registration(newUser);
    //const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}