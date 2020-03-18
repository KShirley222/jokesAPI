const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "jokes must have a setup"],
        minlength: [5, "setup must be 5"]
    },
    punchline: {
        type: String,
        required: [true, "jokes must have a punchline"],
        minlength: [2, "punchline must be 2"]
    }
}, {timestamps: true});

module.exports = mongoose.model("Joke", JokeSchema);