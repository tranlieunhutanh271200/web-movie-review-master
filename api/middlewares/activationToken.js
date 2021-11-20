"use strict";

var jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const activationToken = async (payload) => {
  console.log(jwt.sign(payload, process.env.ACTIVATION_TOKEN_ACTION));
  return await jwt.sign(payload, process.env.ACTIVATION_TOKEN_ACTION, {
    expiresIn: "5m",
  });
};

module.exports = activationToken;