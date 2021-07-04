const economy = require('../../database/economy')
const profileModel = require(`../../database/models/profileSchema`)
module.exports = {
    name: "givebal", 
    aliases: ["give", "gb"],
    permissions: [],
    description: "Gives a member coins from their balance.",
    async execute(client, message, args, Discord, profileData) {
      const mention = message.mentions.members.first() 
      const member = message.author.id
      if (profileData.coins < args[0]){ {message.channel.send(`You do not have enough coins to send ${args[0]} to ${mention}. Your current balance is ${profileData.coins}`); return;}
    } 
      if (!mention) {
      message.reply('Please tag a user to give coins to.')
      return
        }
const coins = args[1]
    if (isNaN(coins)) {
      message.reply('Please provide a valid number of coins.')
      return
    }
const guildId = message.guild.id
    const userId = mention.id

await economy.rmvCoins(guildId, message.author.id, coins)
await economy.addCoins(guildId, userId, coins)

        message.channel.send(`Gave ${coins} coin(s) from ${message.author} to ${mention.displayName}.`);
    }
    }
  