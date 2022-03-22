const economy = require('../../database/economy')
const profileModel = require(`../../database/models/profileSchema`)
module.exports = {
  name: "removebalance",
  aliases: ["rembal", "rmvbal", "rmvb", "rmv", "remove"],
  permissions: ['ADMINISTRATOR'],
  usage: "[member] [PandaCoins value]",
  cooldown: 0,
  description: "Removes PandaCoins from a members balance.",
  async execute(client, message, args, Discord, profileData) {
    if (message.channel.id !== '779175380317765643')
        return;
    const mention = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0])
    const coins = parseInt(args[1])
    const guildId = message.guild.id
    const user = message.author
    let thumb = ["https://i.imgur.com/Kkn7A8G.png", "https://i.imgur.com/OQo1xkQ.png"]
    let pic = thumb[Math.floor(Math.random() * thumb.length)]

    if (!mention) {
      let url = client.users.fetch(user.id);
      url.then(function (targetURL) {
        var imgURL = targetURL.displayAvatarURL();
        let fEmbed = new Discord.MessageEmbed()
          .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
          .setColor("RED")
          .setDescription('Please mention a user to remove PandaCoins from.')
          .setThumbnail(`${pic}`)
        message.channel.send(fEmbed)
      })
      return
    }
    const userId = mention.id
    const coindb = await economy.getCoins(guildId, userId)
    if (isNaN(coins)) {
      let url = client.users.fetch(user.id);
      url.then(function (targetURL) {
        var imgURL = targetURL.displayAvatarURL();
        let cEmbed = new Discord.MessageEmbed()
          .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
          .setColor("RED")
          .setDescription('Please provide a valid number of PandaCoins.')
          .setThumbnail(`${pic}`)
        message.channel.send(cEmbed)
      })
      return
    }

    if (coins > coindb) {
      let url = client.users.fetch(user.id);
      url.then(function (targetURL) {
        var imgURL = targetURL.displayAvatarURL();
        let lEmbed = new Discord.MessageEmbed()
          .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
          .setColor("RED")
          .setDescription(`You cannot remove ${coins} PandaCoins from ${mention}'s balance as it will give them a negative balance. Please check their balance and try again.`)
          .setThumbnail(`${pic}`)
        message.channel.send(lEmbed)
      })
      return
    }

    const newCoins = await economy.rmvCoins(guildId, userId, coins)

    let url = client.users.fetch(userId);
    url.then(function (targetURL) {
      var imgURL = targetURL.displayAvatarURL();

      let dEmbed = new Discord.MessageEmbed()
        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
        .setColor("GREEN")
        .setDescription(`You have removed **${coins} PandaCoins** from ${mention}. They now have ${newCoins} PandaCoins!`)
        .setThumbnail(`https://i.imgur.com/dUoJGTf.png`)
      message.channel.send(dEmbed)
    })
  },
}
