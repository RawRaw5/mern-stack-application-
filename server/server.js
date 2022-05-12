const express = require("express");
const app = express();
// const serverRouter = require("./routes/routes")

// app.use("/blog", serverRouter)

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(process.env.PORT || 5000) 
