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

    // ricerco all'interno dei posts in base allo slug inserito
    const post = posts.find(post => post.slug == req.params.slug);

    if (!post) {
        return res.status(404).json({
            error: "404! Not found"
        });
    };
    
    // gestico la risposta in formato json
    res.json({
        data: post
    });
};


module.exports = {
    postsList,
    index,
    show
};