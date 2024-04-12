const express = require("express");
const User = require("../models/user");

const router = express.Router();

// GET - All users
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 Server failed
    }
});

// GET by ID 
router.get("/:id", getUser, (req, res) => {
    res.send(res.user.name);
});

// POST
router.post("/", async (req, res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password,
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message }); // 400 Bad Request
    }
});

// PATCH
router.patch("/:id", getUser, async (req, res) => {
    if (req.body.name !== null) {
        res.user.name = req.body.name;
    }
    if (req.body.password !== null) {
        res.user.password = req.body.password;
    }

    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE
router.delete("/:id", getUser, async (req, res) => {
    try {
        await res.user.deleteOne({ _id: res.user.id });
        res.json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// middleware
async function getUser(req, res, next) {
    let user;
    try {
        user = await User.findById(req.params.id);
        if (user === null) {
            return res.status(404).json({ message: "Cannot find user" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.user = user;
    next();
};

module.exports = router;
