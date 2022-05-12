const express = require("express");
const router = express.Router();
const getPosts = require("../controllers/posts.js");
const createPost = require("../controllers/posts.js");

router.get("/", getPosts);
router.get("/", createPost);

module.exports = router;
