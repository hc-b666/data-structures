const express = require("express");
const path = require("path");
const router = require("./router/router");

// Created our own server using express module
const app = express();

// Local host port number is 3000
const PORT = 3000;

// Api 
// When client requests to api http://localhost:3000/
// Server responds by sending html file "Hello World!"
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.post("/", (req, res) => {
    res.send("Post method"); // RawContentLength 11 chars
});

// Created separate router file for handling apis
app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
