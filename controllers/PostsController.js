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


// index
const index = (req, res) => {

    res.sendFile(path.resolve(__dirname, "../public/html/list.html"));
};


// show
const show = (req, res) => {

    const post = posts.find(post => post.slug == req.params.slug);
    console.log(post);
    
    res.json({
        data: post
    })
    

};


module.exports = {
    postsList,
    index,
    show
};