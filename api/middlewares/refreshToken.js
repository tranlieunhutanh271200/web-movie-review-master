"use strict";
var jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../.env" });

const refreshToken = async (payload) => {
  return await jwt.sign(payload, process.env.REFRESH_TOKEN_ACTION, {
    expiresIn: "7d",
  });
};

module.exports = refreshToken;