/*

Bonus
Creare inoltre un filtro in querystring per tag, che ritorna in formato json tutti i post che hanno quei tag
Aggiungi il metodo store per la creazione di un nuovo post

*/

const express = require("express");
const app = express();

// importazione del router
const PostsRouter = require("./routers/posts.js");

// assets statici
app.use(express.static("public"));

// start the server
app.listen(3000, (req, res) => {
    console.log(`Server in running at http://localhost:3000`);  
});

// creat first root
app.get("/", (req, res) => {
    res.send("<h1>Hi there</h1>")
});


// Router
app.use("/posts", PostsRouter);