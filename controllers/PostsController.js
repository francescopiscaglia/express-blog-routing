// importazione dei posts
const posts = require("../db/db.js");

// importazione di path
const path = require("path");

// funzione index per la creazione dell'API
const postsList = (req, res) => {

    const responseData = {
        data: posts,
        counter: posts.length
    };

    res.json(responseData);
};

const index = (req, res) => {

    res.sendFile(path.resolve(__dirname, "../public/html/list.html"));
};


module.exports = {
    postsList,
    index
}