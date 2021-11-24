"use strict";
const {User, UserSchema} = require("../models/user");

class userService {
    static async registration(data) {
        return await User(data).save();
      }

    static async checkEmailExist(email) {
        return await User.findOne({ email }); 
    }
    static async updateUser(id, data) {
      console.log(id, data);
      return await User.findByIdAndUpdate(id, { $set: data }, {new: true});
    }
    static async updatePassword(id, data){
      console.log(id, data)
      return await User.findByIdAndUpdate(id, {$set: {"password":data}}, {new:true})
    }
    static async deleteUser(id) {
      console.log(id);
      return await User.findByIdAndUpdate(id, { $set: {"status": false} }, {new: true});
    }
    static async getById(id) {
      return await User.findById(id);
    }
    static async getAll() {
      return await User.find({"status": true});
    }
    static async getAlllimit2() {
      return await User.find({"status": true}).limit(2);
    }
    static async aggregate(){
      return await User.aggregate ([{ $project: { month: { $month: "$createdAt" },},}
      ,{ $group: { _id: "$month", total: { $sum: 1 },},},]);
    }
    static async count(){
      return await User.find({}).countDocuments();
    }
}
module.exports = userService;