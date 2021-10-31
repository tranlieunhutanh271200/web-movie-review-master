"use strict";
const CryptoJS = require("crypto-js");
const userService = require("../services/userService");

exports.registration = async (req, res) => {
      try {
        const { firstName, lastName, email, password } = req.body;
        if (!firstName || !lastName || !email || !password) {
            res
              .status(401)
              .send({ success: false, msg: "Please fillup required field." });
          } else if (password.length < 8) {
            return res.status(401).send({
              success: false,
              msg: "Password must be at least 6 characters.",
            });
          } else {
            const userExists = await userService.checkEmailExist(email);
            if (userExists) {
              return res
                .status(400)
                .send({ success: false, msg: "Email already exists" });
            }
        }
        const user = await userService.registration(newUser);
        res.status(201).json(user);
      } catch (err) {
        res.status(500).json(err);
      }
}