const express = require("express");
const path = require("path");
const fs = require("fs");
const body_parser = require("body-parser");

const app = express();

app.use(body_parser.urlencoded({ extended: true }));

app.use("/css", express.static("public/css"));
app.use("/js", express.static("public/js"));

app.get("/", (req, res) => 
{
    res.sendFile(path.join(__dirname, "public/html/index.html"));
});

// Signup that adds the users to users.js 
app.post("/signup", (req, res) => 
{
    let email = req.body.email;
    let password = req.body.password;

    let users = [];
    const filePath = path.join(__dirname, "users.js");

    if (fs.existsSync(filePath))
    {
        users = require(filePath);
    }

    users.push( {email, password} );

    fs.writeFileSync(filePath, `module.exports = ${JSON.stringify(users, null, 2)}`);

    res.redirect("/");
});

// Login that checks the users whether there are this kind email and password
app.post("/login", (req, res) => 
{
    let email = req.body.email;
    let password = req.body.password;

    const users = require("./users.js");

    const user = users.find(user => user.email === email && user.password === password);

    if (user)
    {
        res.redirect("/");
    }
    else 
    {
        res.status(401).send("Incorrect email or password!");
    }
});

app.listen(3000, () => 
{
    console.log("Server is running on port 3000 - http://localhost:3000 ");
});