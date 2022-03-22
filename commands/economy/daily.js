const economy = require('../../database/economy')
const profileModel = require(`../../database/models/profileSchema`)

module.exports = {
  name: "daily",
  aliases: [],
  permissions: [],
  cooldown: 60000 * 60 * 24,
  description: "Listen to Isabelle's announcement for daily PandaCoins",
  async execute(client, message, args, Discord, profileData) {
   
    const announcements = require("../../utils/isabelle.json")
    const coins = Math.floor(Math.random() * (5000 - 2000)) + 2000;
    const bdayCoins = Math.floor(Math.random() * (8000 - 5000)) + 5000;
    const news = ("Hmmm... There really isn't any news to speak of today...")
    const announcement = announcements[Math.floor(Math.random() * announcements.length)]
    const guildId = message.guild.id
    const user = message.author
    const userId = user.id
    const pics = ["https://i.imgur.com/pjUK0zi.jpg", "https://i.imgur.com/y6SwuiY.jpg"]
    const pic = pics[Math.floor(Math.random() * pics.length)]

    if (message.member.roles.cache.has("786040131911811133")) {
      let url = client.users.fetch(userId);
      url.then(function (targetURL) {
        var imgURL = targetURL.displayAvatarURL();

        let bdayEmbed = new Discord.MessageEmbed()
          .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
          .addField(`<a:vhCupcake:869216395731279912>Happy Birthday!!!<a:vhCupcake:869216395731279912>`, `Island Superstar ${user.username} is celebrating a birthday today! On behalf of the server, have a very happy birthday!!<a:prezzie:780239065378848836>`)
          .addField(`\u200B`, `You received **${bdayCoins} PandaCoins** for tuning in to Isabelle's announcement! Please come back again tomorrow!`)
          .setThumbnail(`${pic}`)
          .setColor("RANDOM")
        message.channel.send(bdayEmbed)
      })
      await economy.addCoins(guildId, userId, bdayCoins);

    } else {

      let url = client.users.fetch(userId);
      url.then(function (targetURL) {
        var imgURL = targetURL.displayAvatarURL();

        let dailyEmbed = new Discord.MessageEmbed()
          .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
          .addField(`${news}`, `${announcement}`)
          .addField(`\u200B`, `You received **${coins} PandaCoins** for tuning in to Isabelle's announcement! Please come back again tomorrow!`)
          .setThumbnail(`${pic}`)
          .setColor("RANDOM")
        message.channel.send(dailyEmbed)
      })
      await economy.addCoins(guildId, userId, coins);
    }
  }
}
