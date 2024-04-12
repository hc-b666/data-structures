const express = require("express");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

const users = [];

// GET - All users
app.get("/users", (req, res) => {
    res.json(users);
});

// POST - Signup
app.post("/signup", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const user = { name: req.body.name, password: hashedPassword };
        users.push(user);
        res.status(201).send("User added");
    } catch (err) {
        res.status(500).send("Error occured:", err);
    }
});

// POST - Signin
app.post("/signin", async (req, res) => {
    const user = users.find((user) => user.name === req.body.name);
    if (!user) {
        return res.status(400).send("Cannot find the user");
    }

    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send("Successfully signed in");
        } else {
            res.send("Password is not matched");
        }
    } catch (err) {
        res.status(500).send("Error occured:", err);
    }
});

app.listen(3000, () => console.log("Server is running on port 3000"));
