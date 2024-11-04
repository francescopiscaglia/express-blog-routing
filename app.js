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