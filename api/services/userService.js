"use strict";
const User = require("../models/user");

class userService {
    static async registration(data) {
        const userData = new User({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            dob: data.dob,
            password: data.password,
        });
        return await User(userData).save();
      }

    static async checkEmailExist(email) {
        return await User.findOne({ email }); 
    }
    static async updateUser(id, data) {
      console.log(id, data);
      return await User.findByIdAndUpdate(id, { $set: data }, {new: true});
    }
    static async deleteUser(id) {
      console.log(id);
      return await User.findByIdAndDelete(id);
    }
    static async getById(id) {
      return await User.findById(id);
    }
    static async getAll() {
      return await User.find({});
    }
    static async getAlllimit2() {
      return await User.find({}).limit(2);
    }
}
module.exports = userService;