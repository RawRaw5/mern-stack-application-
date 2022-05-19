import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: "string", required: true, minLength: 3 },
    body: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        default: "Anonymous",
    },
    likeCount: {
        type: Number,
        default: 0,
    },
    dislikeCount: {
        type: Number,
        default: 0,
    },
    date: {
        type: Date,
        default: new Date(),
    },
    sport: {
        type: String,
        required: true,
    },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
