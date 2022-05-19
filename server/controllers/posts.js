import express from "express";
import mongoose from "mongoose";

import Post from "../models/post.model.js";

const router = express.Router();

// GET ALL POSTS
export const getPosts = async (req, res) => {
    try {
        const posMessages = await Post.find();
        res.status(200).json(posMessages);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

// GET SINGLE POST
export const getSinglePost = async (req, res) => {
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
        console.log("Post was created");
    } catch (error) {
        res.status(404).json(error.message);
        console.log("Post was not created!");
    }
};

// UPDATE ROUTE
export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, body, author } = req.body;
    if (!mongoose.Types.ObjectId.isValid)
        return res.status(404).send(`Could not update post ${id}`);
    const updatedPost = { title, body, author, _id: id };
    await Post.findByIdAndUpdate(id, updatedPost, { new: true });
    res.json(updatedPost);
};

//DELETE POST
export const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`Could not delete post ${id}`);
    await Post.findByIdAndRemove(id);
    res.json("Post was deleted");
};

// LIKE POST
export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(``);

    const post = await Post.findById(id);

    const likedPost = await PostMessage.findByIdAndUpdate(
        id,

        { likeCount: post.likeCount + 1 },

        { new: true }
    );

    res.json(likedPost);

    console.log("Post was liked");
};

// DISLIKE POST
export const dislikePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(``);

    const post = await Post.findById(id);

    const dislikePost = await PostMessage.findByIdAndUpdate(
        id,

        { dislikeCount: post.dislikeCount + 1 },

        { new: true }
    );

    res.json(dislikePost);

    console.log("Post was liked");
};

export default router;
