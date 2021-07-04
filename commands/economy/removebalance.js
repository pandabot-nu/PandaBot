const economy = require('../../database/economy')
const profileModel = require(`../../database/models/profileSchema`)
module.exports = {
    name: "removebalance", 
    aliases: ["rembal", "rmvbal","rmvb", "rmv", "remove"],
    permissions: ['ADMINISTRATOR'],
    description: "Removes coins from a members balance.",
 async execute(client, message, args, Discord, profileData) {
      const mention = message.mentions.users.first()

    if (!mention) {
      message.reply('Please tag a user to remove coins from.')
      return
    }

    const coins = args[1]
    if (isNaN(coins)) {
      message.reply('Please provide a valid numnber of coins.')
      return
    }

    const guildId = message.guild.id
    const userId = mention.id

    const newCoins = await economy.rmvCoins(guildId, userId, coins)

    message.reply(
      `You have removed ${args[1]} coin(s) from <@${userId}>. They now have ${newCoins} coin(s)!`
    )
  },
}