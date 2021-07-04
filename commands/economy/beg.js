const profileModel = require(`../../database/models/profileSchema`)
const economy = require('../../database/economy')
module.exports = {
    name: "beg",
    aliases: [],
    permissions: [],
    description: "beg for coins",
    async execute(client, message, args, Discord, profileData) {
        const randomNumber = Math.floor(Math.random() * 500) + 1;

        const guildId = message.guild.id
        const userId = message.author.id
        const newCoins = await economy.addCoins(guildId, userId, randomNumber)

        return message.channel.send(`${message.author.username}, you begged and received ${randomNumber} **coins**`);
    },
};

