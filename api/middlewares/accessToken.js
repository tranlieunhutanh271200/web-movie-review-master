"use strict";
var jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../.env" });

const accessToken = async (payload) => {
  return await jwt.sign(payload, process.env.ACCESS_TOKEN_ACTION, {
    expiresIn: "15m",
  });
};

module.exports = accessToken;