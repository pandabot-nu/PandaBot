const economy = require('../../database/economy')
const profileModel = require(`../../database/models/profileSchema`)

module.exports = {
    name: "daily", 
    aliases: [],
    permissions: [],
    cooldown: 60000 * 60 * 24,
    description: "Daily coins.",
    async execute(client, message, args, Discord, profileData) {
            const coins = Math.floor(Math.random() * (5000-2000)) + 2000;
      
      message.channel.send(`You received ${coins} coins! Please try again tomorrow!`);
      const guildId = message.guild.id
      const userId = message.author.id
      
      await economy.addCoins(guildId, userId, coins);
    }
   }