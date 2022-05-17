// DEPENDENCIES
import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config';

// EXPRESS SETTINGS
const app = express();
app.use(express.json());

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
import postController from './routes/posts.js'
app.use("/posts", postController);

//APP PORT HOST
app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
});
