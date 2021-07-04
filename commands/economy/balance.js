const profileModel = require('../../database/models/profileSchema')
const economy = require('../../database/economy')
module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions: [],
    description: "Checks the user balance",
   
    async execute(client, message, args, Discord, cmd) {
    const target = message.mentions.users.first() || message.author
    const targetId = target.id

    const guildId = message.guild.id
    const userId = targetId

    const coins = await economy.getCoins(guildId, userId)

    message.channel.send(`${target} has ${coins} coins!`)
  },
}
  