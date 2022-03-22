const profileModel = require('../../database/models/profileSchema')
const economy = require('../../database/economy')
module.exports = {
  name: "addbalance",
  aliases: ["addbal", "addb", "add"],
  permissions: ["ADMINISTRATOR"],
  usage: ["[user] [PandaCoin value]"],
  cooldown: 0,
  description: "Adds PandaCoins to a users balance",

  async execute(client, message, args, Discord, cmd) {
    const mention = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author
    const guildId = message.guild.id
    const userId = mention.id
    const user = message.author
    
    let thumb = ["https://i.imgur.com/Kkn7A8G.png", "https://i.imgur.com/OQo1xkQ.png"]
    let pic = thumb[Math.floor(Math.random() * thumb.length)]
    
if (message.channel.id !== '779175380317765643')
        return;

    if (!mention) {
      let url = client.users.fetch(user.id);
      url.then(function (targetURL) {
        var imgURL = targetURL.displayAvatarURL();
        let fEmbed = new Discord.MessageEmbed()
          .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
          .setColor("RED")
          .setDescription('Please tag a user to add PandaCoins to.')
          .setThumbnail(`${pic}`)
        message.channel.send(fEmbed)
      })
      return
    }

    const coins = parseInt(args[1])
    if (!coins || isNaN(coins)) {
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

    const newCoins = await economy.addCoins(guildId, userId, coins)
    let url = client.users.fetch(user.id);
    url.then(function (targetURL) {
      var imgURL = targetURL.displayAvatarURL();

      let dEmbed = new Discord.MessageEmbed()
        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
        .setColor("GREEN")
        .setDescription(`You have given **${coins} PandaCoins** to ${mention.displayName}. They now have ${newCoins} PandaCoins!`)
        .setThumbnail(`https://i.imgur.com/dUoJGTf.png`)
      message.channel.send(dEmbed)
    })
  },
}
