const profileModel = require('../../database/models/profileSchema')
const economy = require('../../database/economy')
module.exports = {
    name: "addbalance",
    aliases: ["addbal", "addb", "add"],
    permissions: [],
    description: "Checks the user balance",
   
    async execute(client, message, args, Discord, cmd) {
      const mention = message.mentions.users.first()

    if (!mention) {
      message.reply('Please tag a user to add coins to.')
      return
    }

    const coins = args[1]
    if (isNaN(coins)) {
      message.reply('Please provide a valid number of coins.')
      return
    }

    const guildId = message.guild.id
    const userId = mention.id

    const newCoins = await economy.addCoins(guildId, userId, coins)

    message.reply(
      `You have given <@${userId}> ${coins} coin(s). They now have ${newCoins} coin(s)!`
    )
  },
}