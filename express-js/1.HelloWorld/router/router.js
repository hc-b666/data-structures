const express = require("express");
const users = require("../users.json");

const router = express.Router();

router.get("/users/:id", (req, res) => {
    const { id } = req.params; // Gets the id from the url/api
    const user = users.find(user => user.id === id); // Finds that user and sends plain text `Hello ${user.name}`
    if (!user) {
        return res.status(404).send("404! Not Found");
    }
    res.send(`Hello ${user.name}`);
});

module.exports = router;
