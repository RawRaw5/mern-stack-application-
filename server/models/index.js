require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("connected to mongo: ", process.env.MONGO_URI);
    }
);

module.exports.PostMessage = require("./postMessage");