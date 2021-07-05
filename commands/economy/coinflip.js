const profileModel = require(`../../database/models/profileSchema`)
const economy = require('../../database/economy')
const Discord = require("discord.js");
module.exports = {
    name: "coinflip",
    aliases: ["cf"],
    permissions: [],
    description: "flip a coin and gamble PandaCoins",
    async execute(client, message, args, Discord, profileData) {
        const guildId = message.guild.id
        const userId = message.author.id
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
            if (!args[1]) return message.reply("Please specify an amount to bet!")
            if (isNaN(args[1])) return message.reply("Your bet must be a number amount!")

            const coins = parseInt(args[1]);
            if (await economy.getCoins(message.author.id) < coins) return message.reply(`You do not have ${coins} PandaCoins to bet. Please check your balance and try again.`)
            flipResult = flipChoice[Math.floor(Math.random() * flipChoice.length)];

            if (choice != flipResult) {
                message.channel.send(`The flip was ${flipResult} and you chose ${choice}. You have lost ${coins} PandaCoins....Better luck next time....`);
                economy.rmvCoins(guildId, userId, coins);
            } else {
                message.channel.send(`The flip was ${flipResult} and you chose ${choice}. You have won ${coins} PandaCoins! Congratulations!!`);
                economy.addCoins(guildId, userId, coins);
            };
        }
        else {
            message.reply("please choose **heads** or **tails** before the coin flip.");
        }
    }
}
