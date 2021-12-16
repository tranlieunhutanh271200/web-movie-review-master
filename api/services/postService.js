"use strict"

const {Post, PostSchema} = require("../models/post");

class postService{
    static async addPost(data) {
        return await Post(data).save();
    }
    static async checkExistPost(title) {
        return await Post.findOne({title});
    }
    static async autosavePost(id, data) {
        return await Post.findByIdAndUpdate(id, { $set: data }, {new: true});
    }
    static async getPost(id) {
        return await Post.findOne({_id: id}).
        populate("user","_id firstname lastname profilePic").
        populate("genre","_id name");
    }
    static async savePost(id, data) {
        return await Post.findByIdAndUpdate(id, { $set: data }, {new: true});
    }
    static async deletePost(id) {
        return await Post.findByIdAndUpdate(id, { $set: {"hid": true} }, {new: true});
    }
    static async recoverPost(id) {
        return await Post.findByIdAndUpdate(id, { $set: {"hid": false} }, {new: true});
    }
    static async removePost(id) {
        return await Post.findByIdAndRemove(id);
    }
    static async getAllPost() {
        return await Post.find({"status": true, "hid" : false}).
        populate("user","_id firstname lastname profilePic").
        populate("genre","_id name");
    }
    static async getPostbyGenre(data) {
        return await Post.find({"genre":data, "status": true, "hid" : false}).
        populate("user","_id firstname lastname profilePic").
        populate("genre","_id name");
    }
    static async getPostPublishbyUser(data) {
        return await Post.find({"user":data, "status": true, "hid" : false})
    }
    static async getPostWritingbyUser(data) {
        return await Post.find({"user":data, "status": false, "hid" : false})
    }
    static async getPostHiddenbyUser(data) {
        return await Post.find({"user":data, "hid" : true})
    }
}

module.exports = postService;