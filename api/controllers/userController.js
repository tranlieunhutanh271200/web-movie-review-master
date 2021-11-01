"use strict";

const CryptoJS = require("crypto-js");
//const User = require("../models/User");
const jwt = require("jsonwebtoken");
const userService = require("../services/userService");

//REGISTER
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

exports.login = async (req, res) => {
  if (!req.body.password) {
    return res.json({
      success: false,
      msg: "Please enter your password.",
    });
  }
  else if (!req.body.email) {
    return res.json({
      success: false,
      msg: "Please enter your email.",
    });
  }
  else try{
    
    const userExists = await userService.checkEmailExist(req.body.email);
    
    if (!userExists){
      res.status(401).json("Wrong password or username!");
    } 
    const bytes = CryptoJS.AES.decrypt(userExists.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) {
      res.status(401).json("Wrong password or username");
    }

    const accessToken = jwt.sign(
      { id: userExists._id, isAdmin: userExists.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );
    const { password, ...info } = userExists._doc;
    res.status(200).json({ ...info, accessToken });
  }catch(err){
    res.status(500).json(err)
  }
}
