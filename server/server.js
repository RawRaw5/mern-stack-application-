// DEPENDENCIES
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

// EXPRESS SETTINGS
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//PORT CONFIGURATION
const PORT = process.env.PORT;

// MONGO CONFIGURATION
mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("connected to mongo: ", process.env.MONGO_URI);
    }
);

//ROUTES
import postController from "./routes/posts.js";
app.use("/posts", postController);

app.post("/posts", function (req, res) {
    // Without `express.json()`, `req.body` is undefined.
    console.log(`${req.body}`);
});

//APP PORT HOST
app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
});
