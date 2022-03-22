const profileModel = require(`../../database/models/profileSchema`)
const economy = require('../../database/economy')
module.exports = {
  name: "beg",
  aliases: [],
  cooldown: 60000 * 15,
  permissions: [],
  description: "Begs PandaBot for PandaCoins",
  async execute(client, message, args, Discord, profileData) {
   
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const user = message.author
    const guildId = message.guild.id
    const userId = message.author.id
    const newCoins = await economy.addCoins(guildId, userId, randomNumber)

    let url = client.users.fetch(userId);
    url.then(function (targetURL) {
      var imgURL = targetURL.displayAvatarURL();

      let begEmbed = new Discord.MessageEmbed()
        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
        .setDescription(`${user.username}, you begged and received **${randomNumber} PandaCoins**`)
        .setThumbnail("https://i.imgur.com/DAHZPF4.png")
        .setColor("RANDOM")
      return message.channel.send(begEmbed)
    })
  },
}
