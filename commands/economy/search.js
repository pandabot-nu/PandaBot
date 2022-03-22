const profileModel = require(`../../database/models/profileSchema`)
const economy = require('../../database/economy')
const Discord = require('discord.js')

module.exports = {
    name: "search",
    aliases: [],
    permissions: [],
    cooldown: 60000 * 5,
    description: "Search for some PandaCoins",

    async execute(client, message, args, Discord, profileData) {
      
        const locations = [
            "in Resident Services",
            "a villagers house",
            "at K.K's concert",
            "at Harvs",
            "the secret beach",
            "the pier",
            "the airport",
            "the seaplane",
            "in Nooks Cranny",
            "in the Museum",
            "in Able's Sisters",
            "the campsite",
            "the pond",
            "the clifftop pond",
            "a Nook Mile Island",
            "the beach",
            "the river",
            "around the rocks",
            "in your house",
            "in a waterfall"
        ];

        let location = locations[Math.floor(Math.random() * locations.length)]

        const coins = Math.floor(Math.random() * 100) + 10;
        const user = message.author
        const userId = user.id
        const guildId = message.guild.id
        let url = client.users.fetch(userId);
        url.then(function (targetURL) {
            var imgURL = targetURL.displayAvatarURL();

            const searchEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                .setDescription(`You found **${coins} PandaCoins** by searching **${location}!**`)
                .setThumbnail("https://i.imgur.com/vSjxZI6.png")

            message.channel.send(searchEmbed);
            economy.addCoins(guildId, userId, coins)
        })
    }
}
