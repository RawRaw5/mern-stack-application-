const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    message: {
        type: String,
        // required: true,
    },
    creator: {
        type: String,
        default: "Anonymous",
    },
    tags: {
        type: [String],
        required: true,
    },
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

module.exports = mongoose.model("PostMessage", postSchema);