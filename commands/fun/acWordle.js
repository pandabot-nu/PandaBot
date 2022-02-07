const answers = require('../../utils/acWordleWords.json')
//const wordleCD = require('../../database/models/wordleCD.js')
//const stats = require('../../database/models/wordleStats.js')
const Discord = require('discord.js')
const canvas = require('canvas')
const Wordle = require('../../utils/acWordle.js')

module.exports = {
    name: "acwordle",
    aliases: [],
    usage: [],
    permissions: [],
    cooldown: 0,
    description: "wordle using animal crossing villagers and NPC's!",

    async execute(client, message, args, Discord) {

        if (message.content.includes("+acwordle")) {
            Wordle.LoadNewWordle(message);
        }
    }
}
