// DEPENDENCIES
const express = require("express");
// const mongoose = require("mongoose");

//CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//MONGO CONNECTION


//MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//ROUTES
const postController = require('./routes/posts.js')
app.use('/posts', postController)

//LISTEN
app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
});