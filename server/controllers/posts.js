const router = require("express").Router();
const db = require("../models");


router.get("/", (req, res) => {
    // if (req.body.message === "") {
    //     req
    // }
    db.PostMessage.find()
        .then((postMessage) => {
            res.render("index", { postMessage });
            console.log(res)
        })
        .catch((error) => {
            console.log(error, "an error");
        });
});

//post 
router.post("/", (req, res) => {
    db.PostMessage.create(req.body)
        .then(() => {
            console.log('post was created!')
            res.render('success')
        })
        .catch((error) => {
            console.log('an error occurred', error)
        });
});

// //CREATE A POST
// const createPost = async (req, res) => {
//     const post = req.body;
//     const newPost = new PostMessage(post);
//     try {
//         console.log("hello qwolrd");
//         await newPost.save();
//         res.status(201).json(newPost);
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }
// };

//GET POSTS
// const getPosts = async (req, res) => {
//     try {
//         const postMessages = await PostMessage.find();
//         console.log(postMessages);
//         res.status(200).json(postMessages);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// };

//GET POSTS
// const getPosts = async (req, res) => {
//     try {
//         console.log("HELLO WORLD");
//         res.render("index");
//     } catch (error) {
//         console.log("hi", error);
//     }
// };

// module.exports = getPosts;
// module.exports = createPost;
module.exports = router;
