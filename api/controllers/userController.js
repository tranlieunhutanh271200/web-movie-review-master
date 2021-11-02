"use strict";

const CryptoJS = require("crypto-js");
//const User = require("../models/User");
const jwt = require("jsonwebtoken");
//const { updateUser } = require("../services/userService");
const userService = require("../services/userService");
const User = require("../models/user")

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

//LOGIN
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

//UPDATE
exports.update = async (req, res) => {
  if(req.userExists.id === req.params.id || req.userExists.isAdmin){
    if(req.body.password){
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }
    //console.log(req.params.id, req.body);

    try {
      const updatedUser = await userService.updateUser(req.params.id, req.body, {new: true});  
      res.status(200).json(updatedUser);
    }catch(err){
      res.status(500).json(err);
    }
  }
  else{
    res.status(403).json("You can update only your account!")
  }
}

//DELETE
exports.delete = async (req, res) => {
  if(req.userExists.id === req.params.id || req.userExists.isAdmin){
    console.log(req.userExists.isAdmin)
    try {
      const deletedUser = await userService.deleteUser(req.params.id);
      if(!deletedUser){
        res.status(403).json("User not found!")
      }
      res.status(200).json("User has been deleted...");
    }catch(err){
      res.status(500).json(err);
    }
  }
  else{
    res.status(403).json("You can delete only your account!")
  }
}

//FIND
exports.find = async (req, res) => {
  if(req.userExists.id === req.params.id || req.userExists.isAdmin){
    //console.log(req.userExists.isAdmin)
    try {
      const findUser = await userService.getById(req.params.id);
      if(!findUser){
        res.status(403).json("User not found!")
      }
      const { password, ...info } = findUser._doc;
      res.status(200).json(info);
    }catch(err){
      res.status(500).json(err);
    }
  }
  else{
    res.status(403).json("Only admin can find users")
  }
}

//GET ALL USER
exports.getall = async (req, res) => {
  const query = req.query.new;
  if(req.userExists.isAdmin){
    //console.log(req.userExists.isAdmin)
    try {
      const findAllUser = query ? await userService.getAlllimit2() : await userService.getAll();
      if(!findAllUser){
        res.status(403).json("Sorry! We don't have any users here!")
      }
      //const { password, ...info } = findAllUser._doc;
      res.status(200).json(findAllUser);
    }catch(err){
      res.status(500).json(err);
    }
  }
  else{
    res.status(403).json("You are not allowed to see all users!")
  }
}

//GET USER STATS
exports.stats = async (req, res) => {
  const today = new Date();
  const lastYear = today.setFullYear(today.setFullYear() -1 );

  try {
    const data = await User.aggregate([{ $project: { month: { $month: "$createdAt" },},}
    ,{ $group: { _id: "$month", total: { $sum: 1 },},},]);
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err);
  }
}