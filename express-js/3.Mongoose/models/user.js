const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    signDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userScheme);
