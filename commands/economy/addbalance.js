const profileModel = require('../../database/models/profileSchema')
const economy = require('../../database/economy')
const inventory = require("../../database/models/inventory")
module.exports = {
  name: "balance",
  aliases: ["bal", "bl"],
  permissions: [],
  cooldown: 0,
  description: "Checks the user balance",

  async execute(client, message, args, Discord, cmd) {
    const mention = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author
    const userId = mention.id
    const guildId = message.guild.id
    const tarStr = await client.users.cache.get(userId)
    const coins = await economy.getCoins(guildId, userId)
    

    await inventory.findOne(
      {
        guildId,
        userId
      }, async (err, data) => {
        if (data) {
          const mappedData = Object.keys(data.inventory).map((key) => {
            return `${data.inventory[key]}x ${key}`
          }).join("\n")

          if (mappedData.length < 1) {
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
              var imgURL = targetURL.displayAvatarURL();

              let bal3Embed = new Discord.MessageEmbed()
                .setAuthor(`${tarStr.username}#${tarStr.discriminator}`, `${imgURL}`)
                //.addField("Pet", "*coming soon*")
                .addField("Balance:" ,`<a:pandacoin:868293179110203412> ${coins}`)
                .setColor("RANDOM")
              message.channel.send(bal3Embed)
            })
            return
          }

          let url = client.users.fetch(userId);
          url.then(function (targetURL) {
            var imgURL = targetURL.displayAvatarURL();

            let balEmbed = new Discord.MessageEmbed()
              .setAuthor(`${tarStr.username}#${tarStr.discriminator}`, `${imgURL}`)
              //.addField("Pet", "*coming soon*")
              .addField("Balance:", `<a:pandacoin:868293179110203412> ${coins}`)
              .addField("Inventory:", `${mappedData}`)
              .setColor("RANDOM")
            message.channel.send(balEmbed)
          })
        } else {
          let url = client.users.fetch(userId);
          url.then(function (targetURL) {
            var imgURL = targetURL.displayAvatarURL();

            let bal2Embed = new Discord.MessageEmbed()
              .setAuthor(`${tarStr.username}#${tarStr.discriminator}`, `${imgURL}`)
              //.addField("Pet", "*coming soon*")
              .addField("Balance:", `<a:pandacoin:868293179110203412> ${coins}`)
              .setColor("RANDOM")
            message.channel.send(bal2Embed)
          })
        }
      })
  },
}
