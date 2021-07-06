const profileModel = require('../../database/models/profileSchema')
const economy = require('../../database/economy')
const { execute } = require('./slots')
module.exports = {
    name: "drop",
    aliases: [],
    usage: "[channel] [drop amount]",
    permissions: ["ADMINISTRATOR"],
    description: "Drops PandaCoins in a specified channel",

    async execute(client, message, args, Discord, profileData) {
        const channel = message.mentions.channels.first();
        if (!channel) return message.reply("Please mention a channel to drop the PandaCoins in!")

        const coins = args[1]
        if (!coins || isNaN(coins)) return message.reply("Please specify a valid amount of PandaCoins!")

        const filter = (msg) => msg.guild.id === message.guild.id && msg.content === `${prefix}pick`
        message.channel.send(`${coins} PandaCoins have been dropped in ` + channel.toString)
        channel.send(`Quick! ${coins} PandaCoins have been dropped!! Type ${prefix}pick to pick them up!!`)

        channel.awaitMessages(filter, { max: 1, time: 60000 }).then(async (msg) => {
            const userId = msg.first().author.id
            const guildId = message.guild.id
            const claimCoins = parseInt(coins)

            economy.addCoins(guildId, userId, claimCoins)
            msg.first().reply(`${msg.first().author} has picked ${claimCoins} PandaCoins!`)
        })
    }
}
