// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");

//CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

//MONGO CONNECTION
mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("connected to mongo: ", process.env.MONGO_URI);
    }
);

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