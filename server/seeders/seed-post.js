const db = require("../models");

db.PostMessage.create([
    {
        message: "Message was added",
        creator: "Joe",
        tags: ["tag", "string"],
        createdAt: new Date(),
    },
])
    .then(() => {
        console.log("Success!");
        process.exit();
    })
    .catch((err) => {
        console.log("Error", err.message);
    });
