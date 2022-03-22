const profileModel = require('../../database/models/profileSchema')
const economy = require('../../database/economy')

module.exports = {
    name: "drop",
    aliases: [],
    usage: "[channel] [drop amount]",
    permissions: ["ADMINISTRATOR"],
    cooldown: 0,
    description: "Drops PandaCoins in a specified channel",

    async execute(client, message, args, Discord, profileData) {
      if (message.channel.id !== '779175380317765643')
        return;
        const channel = message.mentions.channels.first();
        let thumb = ["https://i.imgur.com/Kkn7A8G.png", "https://i.imgur.com/OQo1xkQ.png"]
        let pic = thumb[Math.floor(Math.random() * thumb.length)]
        const user = message.author

        if (!channel) {
            let url = client.users.fetch(user.id);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();
                let cEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                    .setColor("RED")
                    .setDescription("Please mention a channel to drop the PandaCoins in!")
                    .setThumbnail(`${pic}`)
                message.channel.send(cEmbed)
              
            }) 
            return
        }

        const coins = args[1]
        if (!coins || isNaN(coins)) {
            let url = client.users.fetch(user.id);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();
                let fEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                    .setColor("RED")
                    .setDescription('Please provide a vaild amount of PandaCoins to drop!')
                    .setThumbnail(`${pic}`)
                message.channel.send(fEmbed)
            })
            return
        }

        const filter = (msg) => msg.guild.id === message.guild.id && msg.content === `${process.env.PREFIX}grab`
        let url = client.users.fetch(user.id);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();
        let embed = new Discord.MessageEmbed()
            .setDescription(`**${coins} PandaCoins** have been dropped in ${channel}`)
            .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
            .setColor("RANDOM")
        message.channel.send(embed)
            })

        let dropEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`OMG....What's happening?!`)
            .setThumbnail("https://i.imgur.com/HjavjVH.png")
            .setDescription(`Quick! **${coins} PandaCoins** have been dropped!! Type ${process.env.PREFIX}grab to pick them up!!`)
        channel.send(dropEmbed)

        channel.awaitMessages(filter, { max: 1 }).then(async (msg) => {
            const users = msg.first().author
            const userId = users.id
            const guildId = message.guild.id
            const claimCoins = parseInt(coins)

            economy.addCoins(guildId, userId, claimCoins)
            let collectEmbed = new Discord.MessageEmbed()
            .setDescription(`${users} has grabbed **${claimCoins} PandaCoins!**`)
            .setColor("RANDOM")
            channel.send(collectEmbed)
        })
    }
}
