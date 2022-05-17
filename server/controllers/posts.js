import express from "express";
import mongoose from "mongoose";

import Post from "../models/post.model.js";

const router = express.Router();

// GET POSTS
export const getPosts = async (req, res) => {
    try {
        const posMessages = await Post.find();
        res.status(200).json(posMessages);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

// GET SINGLE POST
export const getPost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

// CREATE NEW POST
export const newPost = async (req, res) => {
    const { title, body, author } = req.body;
    const newPostMessage = new Post({ title, body, author });
    try {
        await newPostMessage.save();
        res.status(200).json(newPostMessage);
        console.log("post was created");
    } catch (error) {
        res.status(404).json(error.message);
        console.log("post not created");
    }
};

//DELETE POST
export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`Could not delete post ${id}`);
    await Post.findByIdAndRemove(id);
    res.json("post was deleted");
};

export default router;
