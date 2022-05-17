const express = require("express");
const router = express.Router();
const getPosts = require("../controllers/posts.js");
const createPost = require("../controllers/posts.js");
const db = require("../models");
// const app = express();

router.get("/", getPosts);
router.post("/", createPost);


module.exports = router;
