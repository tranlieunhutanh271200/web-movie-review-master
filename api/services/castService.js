"use strict"

const {Cast, CastSchema} = require("../models/cast");

class castService{
    static async addCast(data) {
        return await Cast(data).save();
    }
    static async checkExistCast(name){
        //console.log(name)
        return await Cast.findOne( { name });
    }
    static async updateCast(id, data) {
        console.log(id, data);
        return await Cast.findByIdAndUpdate(id, { $set: data }, {new: true});
    }
    static async deleteCast(id) {
        console.log(id);
        return await Cast.findByIdAndUpdate(id, { $set: {"status": false} }, {new: true});
    }
    static async getById(id) {
        const cast = await Cast.findById(id);
        const {dob, createdAt, updatedAt, ...info} = cast._doc
      info.dob = cast.dob.getDate()+'-' + (cast.dob.getMonth()+1) + '-'+cast.dob.getFullYear();
      info.createdAt = cast.createdAt.getHours() + ":" + cast.createdAt.getMinutes() + ":" + cast.createdAt.getSeconds()+" "+ cast.createdAt.getDate()+'-' + (cast.createdAt.getMonth()+1) + '-'
        +cast.createdAt.getFullYear();
      info.updatedAt= cast.updatedAt.getHours() + ":" + cast.updatedAt.getMinutes() + ":" + cast.updatedAt.getSeconds()+ " " +cast.updatedAt.getDate()+'-' + (cast.updatedAt.getMonth()+1) + '-'
        +cast.updatedAt.getFullYear();
      return info;
      }
    static async getAll() {
        const casts = await Cast.find({"status": true});
        let newCasts = casts.map((cast) =>({
          name: cast.name,
          bio: cast.bio,
          _id: cast._id,
          castPic: cast.castPic,
          status: cast.status,
          dob: cast.dob.getDate()+'-' + (cast.dob.getMonth()+1) + '-'+cast.dob.getFullYear(),
          createdAt: cast.createdAt.getHours() + ":" + cast.createdAt.getMinutes() + ":" + cast.createdAt.getSeconds()+' '+cast.createdAt.getDate()+'-' + (cast.createdAt.getMonth()+1) + '-'
          +cast.createdAt.getFullYear(),
          updatedAt:  cast.updatedAt.getHours() + ":" + cast.updatedAt.getMinutes() + ":" + cast.updatedAt.getSeconds()+ ' ' + cast.updatedAt.getDate()+'-' + (cast.updatedAt.getMonth()+1) + '-'
          +cast.updatedAt.getFullYear(),
          __v: cast.__v
        }))
        return await newCasts;
      }
    static async getAlllimit2() {
        const casts = await Cast.find({"status": true}).limit(2);
        let newCasts = casts.map((cast) =>({
          name: cast.name,
          bio: cast.bio,
          _id: cast._id,
          castPic: cast.castPic,
          status: cast.status,
          dob: cast.dob.getDate()+'-' + (cast.dob.getMonth()+1) + '-'+cast.dob.getFullYear(),
          createdAt: cast.createdAt.getHours() + ":" + cast.createdAt.getMinutes() + ":" + cast.createdAt.getSeconds()+' '+cast.createdAt.getDate()+'-' + (cast.createdAt.getMonth()+1) + '-'
          +cast.createdAt.getFullYear(),
          updatedAt:  cast.updatedAt.getHours() + ":" + cast.updatedAt.getMinutes() + ":" + cast.updatedAt.getSeconds()+ ' ' + cast.updatedAt.getDate()+'-' + (cast.updatedAt.getMonth()+1) + '-'
          +cast.updatedAt.getFullYear(),
          __v: cast.__v
        }))
        return await newCasts;
      }
    static async count(){
        return await Cast.find({"status": true}).countDocuments();
    }
    static async getAllDeleted() {
        const casts = await Cast.find({"status": false});
        let newCasts = casts.map((cast) =>({
          name: cast.name,
          bio: cast.bio,
          _id: cast._id,
          castPic: cast.castPic,
          status: cast.status,
          dob: cast.dob.getDate()+'-' + (cast.dob.getMonth()+1) + '-'+cast.dob.getFullYear(),
          createdAt: cast.createdAt.getHours() + ":" + cast.createdAt.getMinutes() + ":" + cast.createdAt.getSeconds()+' '+cast.createdAt.getDate()+'-' + (cast.createdAt.getMonth()+1) + '-'
          +cast.createdAt.getFullYear(),
          updatedAt:  cast.updatedAt.getHours() + ":" + cast.updatedAt.getMinutes() + ":" + cast.updatedAt.getSeconds()+ ' ' + cast.updatedAt.getDate()+'-' + (cast.updatedAt.getMonth()+1) + '-'
          +cast.updatedAt.getFullYear(),
          __v: cast.__v
        }))
        return await newCasts;
      }
      static async getAllDeletedlimit2() {
        const casts = await Cast.find({"status": false}).limit(2);
        let newCasts = casts.map((cast) =>({
          name: cast.name,
          bio: cast.bio,
          _id: cast._id,
          castPic: cast.castPic,
          status: cast.status,
          dob: cast.dob.getDate()+'-' + (cast.dob.getMonth()+1) + '-'+cast.dob.getFullYear(),
          createdAt: cast.createdAt.getHours() + ":" + cast.createdAt.getMinutes() + ":" + cast.createdAt.getSeconds()+' '+cast.createdAt.getDate()+'-' + (cast.createdAt.getMonth()+1) + '-'
          +cast.createdAt.getFullYear(),
          updatedAt:  cast.updatedAt.getHours() + ":" + cast.updatedAt.getMinutes() + ":" + cast.updatedAt.getSeconds()+ ' ' + cast.updatedAt.getDate()+'-' + (cast.updatedAt.getMonth()+1) + '-'
          +cast.updatedAt.getFullYear(),
          __v: cast.__v
        }))
        return await newCasts;
      }
      static async recoverUser(id) {
        console.log(id);
        return await Cast.findByIdAndUpdate(id, { $set: {"status": true} }, {new: true});
      }
      static async removeUser(id) {
        console.log(id);
        return await Cast.findByIdAndRemove(id);
      }
}

module.exports = castService;