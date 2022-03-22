const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    userId: String,
    canGuess: String,
    lastGuessDate: Boolean,
    guesses: String,
    wins: Number,
    games: Number,
    hasCompletedToday: Boolean,
})

module.exports = mongoose.model('wordleSchema', schema)
