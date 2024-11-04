const express = require("express");
const router = express.Router();

const posts = require("../db/db.js");
const PostsController = require("../controllers/PostsController.js");

// Posts API
router.get("/list", PostsController.postsList);

router.get("/", PostsController.index);




module.exports = router;