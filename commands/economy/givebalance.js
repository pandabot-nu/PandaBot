const economy = require('../../database/economy')
const profileModel = require(`../../database/models/profileSchema`)
module.exports = {
  name: "givebal",
  aliases: ["give", "gb"],
  permissions: [],
  usage: "[member] [PandaCoins value]",
  cooldown: 0,
  description: "Gives a member coins from their balance.",

  async execute(client, message, args, Discord, profileData) {
    
    const mention = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0])
    const user = message.author
    const userId = user.id
    
    const guildId = message.guild.id
    const coins = parseInt(args[1])
    const coindb = await economy.getCoins(guildId, userId)
    let thumb = ["https://i.imgur.com/Kkn7A8G.png", "https://i.imgur.com/OQo1xkQ.png"]
    let pic = thumb[Math.floor(Math.random() * thumb.length)]

    if (!mention) {
      let url = client.users.fetch(userId);
      url.then(function (targetURL) {
        var imgURL = targetURL.displayAvatarURL();
        let fEmbed = new Discord.MessageEmbed()
          .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
          .setColor("RED")
          .setDescription('Please mention a user to give PandaCoins to.')
          .setThumbnail(`${pic}`)
        message.channel.send(fEmbed)
      })
      return
    }

    if (isNaN(coins)) {
      let url = client.users.fetch(userId);
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

    if (coindb < coins) {
      let url = client.users.fetch(userId);
      url.then(function (targetURL) {
        var imgURL = targetURL.displayAvatarURL();
        let lEmbed = new Discord.MessageEmbed()
          .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
          .setColor("RED")
          .setDescription(`You do not have ${coins} PandaCoins to give. Please check your balance and try again.`)
          .setThumbnail(`${pic}`)
        message.channel.send(lEmbed)
      })
      return
    } else {
      console.log(coindb)
      const mentionId = mention.id

      await economy.rmvCoins(guildId, userId, coins)
      await economy.addCoins(guildId, mentionId, coins)

      let url = client.users.fetch(userId);
      url.then(function (targetURL) {
        var imgURL = targetURL.displayAvatarURL();

        let dEmbed = new Discord.MessageEmbed()
          .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
          .setColor("GREEN")
          .setDescription(`Gave **${coins} PandaCoins** from ${user.username} to ${mention.displayName}.`)
          .setThumbnail(`https://i.imgur.com/dUoJGTf.png`)
        message.channel.send(dEmbed)
      })
    }
  }
}
