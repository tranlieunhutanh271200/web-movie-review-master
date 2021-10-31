"use strict";
const CryptoJS = require("crypto-js");
const User = require("../models/user");

class userService {
    static async registration(data) {
        const newUser = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            dob: req.body.dob,
            password: CryptoJS.AES.encrypt(
              req.body.password,
              process.env.SECRET_KEY
            ).toString(),
        });
        return await User(userData).save();
      }

    static async checkEmailExist(email) {
        return await User.findOne({ email });
    }
}