const profileModel = require(`../../database/models/profileSchema`)
const economy = require('../../database/economy')
const Discord = require("discord.js");
module.exports = {
    name: "coinflip",
    aliases: ["cf"],
    permissions: [],
    cooldown: 0,
    usage: "[heads/tails] [bet amount]",
    description: "flips a coin to gamble PandaCoins",
    async execute(client, message, args, Discord, profileData) {
      if (message.channel.id !== '868444993340182558')
        return;
        const guildId = message.guild.id
        const userId = message.author.id
        const user = message.author

        let thumb = ["https://i.imgur.com/Kkn7A8G.png", "https://i.imgur.com/OQo1xkQ.png"]
        let pic = thumb[Math.floor(Math.random() * thumb.length)]

        if (args[0] != undefined) {
            let choice = args[0].toLowerCase();

            if (choice == 'heads' || choice == 'h' || choice == 'head') {
                choice = 'heads';
            }

            else if (choice == 'tails' || choice == 't' || choice == 'tail') {
                choice = 'tails';
            }


            var flipChoice = [
                "heads",
                "tails"
            ];
            if (!args[1] || isNaN(args[1])) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let fEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription('Please provide a vaild amount of PandaCoins to bet!')
                        .setThumbnail(`${pic}`)
                    message.channel.send(fEmbed)
                })
                return
            }

            const coins = parseInt(args[1]);
            if (await economy.getCoins(guildId, userId) < coins) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let cEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`You do not have ${coins} PandaCoins to bet. Please check your balance and try again.`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(cEmbed)
                })
                return
            }
            else {

                flipResult = flipChoice[Math.floor(Math.random() * flipChoice.length)];

                if (choice != flipResult) {

                    let url = client.users.fetch(userId);
                    url.then(function (targetURL) {
                        var imgURL = targetURL.displayAvatarURL();

                        let loseEmbed = new Discord.MessageEmbed()
                            .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                            .setDescription(`The flip was ${flipResult} and you chose ${choice}. You have lost **${coins} PandaCoins**....Better luck next time....`)
                            .setThumbnail("https://i.imgur.com/q8exlJR.gif")
                            .setColor("RANDOM")
                        message.channel.send(loseEmbed)
                        economy.rmvCoins(guildId, userId, coins);
                    })
                }

                else {
                    let url = client.users.fetch(userId);
                    url.then(function (targetURL) {
                        var imgURL = targetURL.displayAvatarURL();

                        let winEmbed = new Discord.MessageEmbed()
                            .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                            .setDescription(`The flip was ${flipResult} and you chose ${choice}. You have won **${coins} PandaCoins!** Congratulations!!`)
                            .setThumbnail("https://i.imgur.com/dUoJGTf.png")
                            .setColor("RANDOM")
                        message.channel.send(winEmbed)
                        economy.addCoins(guildId, userId, coins);
                    })

                };
            }
        }

        else {
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();
                let qEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                    .setColor("RED")
                    .setDescription('Please choose **heads** or **tails** before the coin flip.')
                    .setThumbnail(`${pic}`)
                message.channel.send(qEmbed)
                return
            })
        }
    }
}
