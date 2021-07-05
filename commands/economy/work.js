const economy = require('../../database/economy')
const profileModel = require(`../../database/models/profileSchema`)

module.exports = {
    name: "work", 
    aliases: [],
    permissions: [],
    cooldown: 60000 * 15,
    description: "Adds coins to a members balance.",
    async execute(client, message, args, Discord, profileData) {
      const jobs = ["Wisp", "Celeste", "Blathers", "Tom Nook", "Isabelle", "C.J", "Flick", "Mable", "Sable", "Label", "Timmy","Tommy", "K.K Slider", "Sahara", "Daisy Mae", "Leif", "Redd"]
      const jobIndex = Math.floor(Math.random() * jobs.length);
      const coins = Math.floor(Math.random() * (500-200)) + 200;
      
      message.channel.send(`You worked with ${jobs[jobIndex]} and earned ${coins} coins`);
      const guildId = message.guild.id
      const userId = message.author.id
      
      await economy.addCoins(guildId, userId, coins);
    }
   }
