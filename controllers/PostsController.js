// importazione dei posts
const posts = require("../db/db.js");

// importazione di path
const path = require("path");

// funzione per la creazione dell'API
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

    // controllo per eventuale slug sbagliato
    if (!post) {
        return res.status(404).json({
            error: "404! Not found"
        });
    };

    // filtro per tag
    if (req.query.tags) {
        const tagsFilter = posts.filter(post => post.tags.includes(req.query.tags))
        return res.json({
            data: tagsFilter
        });
    };  

    // gestico la risposta in formato json
    res.json({
        data: post
    });
};


// Store
const store = (req, res) => {

    // creo un nuovo oggetto per il nuovo dolce
    const newPost = {
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    // pusho il nuovo oggetto nell'array originale
    posts.push(newPost);

    // risposta in formato json
    res.json({
        status: 201,
        data: posts,
        counter: posts.length
    });
};

module.exports = {
    postsList,
    index,
    show,
    store
};