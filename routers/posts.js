const express = require("express");
const router = express.Router();

const posts = require("../db/db.js");
const PostsController = require("../controllers/PostsController.js");

// Posts API
router.get("/list", PostsController.postsList);

// Markup
router.get("/", PostsController.index);

// Show
router.get("/:slug", PostsController.show)

// Store
router.post("/", PostsController.store)




module.exports = router;