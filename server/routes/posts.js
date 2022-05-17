import express from "express";
import { getPosts, newPost, getPost, deletePost } from '../controllers/posts.js'

const router = express.Router();

// get posts
router.get("/", getPosts);
// get single post
router.get("/:id", getPost)
// create new post
router.post('/', newPost);
// delete single post
router.delete('/:id', deletePost);

export default router;
