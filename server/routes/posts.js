import express from "express";
import {
    getPosts,
    newPost,
    getSinglePost,
    deletePost,
    updatePost,
    likePost,
    dislikePost
} from "../controllers/posts.js";

const router = express.Router();

// get all route
router.get("/", getPosts);
// get by id route
router.get("/:id", getSinglePost);
// new post route
router.post("/", newPost);
// update route
router.patch("/:id", updatePost);
// delete single post
router.delete("/:id", deletePost);
// like post
router.patch("/:id/like", likePost);
// dislike post
router.patch("/:id/dislike", dislikePost);

export default router;
