const express = require("express");
const router = express.Router();

const posts = require("../db/db.js");

// Posts API
router.get("/", (req, res) => {

    const responseData = {
        data: posts,
        counter: posts.length
    };

    res.json(responseData);

});



module.exports = router;