const answers = require('../../utils/wordleWords.json')
//const wordleCD = require('../../database/models/wordleCD.js')
//const stats = require('../../database/models/wordleStats.js')
const Discord = require('discord.js')
const canvas = require('canvas')
const Wordle = require('../../utils/wordle.js')

module.exports = {
    name: "wordlestats",
    aliases: [],
    usage: [],
    permissions: [],
    cooldown: 0,
    description: "wordle!",

    async execute(client, message, args, Discord) {

        if (message.content.includes("+wordlestats")) {
            Wordle.ShowWordleStats(message)
        }
        
    }
}
