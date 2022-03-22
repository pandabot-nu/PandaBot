
const { MessageEmbed } = require('discord.js')
const profileModel = require(`../../database/models/profileSchema`)
const economy = require('../../database/economy')

module.exports = {
    name: "coinleaderboard",
    aliases: ["pcleaderboard", "pandacoinleaderboard", "pclb", "cl"],
    permissions: [],
    cooldown: 0,
    description: "PandaCoin leaderboard for the server",
    async execute(client, message, args, Discord, profileData) {
     

        const rawLeaderboard = await economy.fetchLeaderboard(message.guild.id, 10);

        if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

        const leaderboard = await economy.computeLeaderboard(client, rawLeaderboard, true);
        
        const lb = leaderboard.map(e => `${e.position}) **${e.username}**\n<a:pandacoin:868293179110203412> PandaCoins: ${e.coins}`);

        const lbEmbed = new Discord.MessageEmbed()
            .setColor('#fc6a03')
            .setTitle(`Leaderboard for ${message.guild.name}! <a:blastoff:780247247496544266>`)
            .addField("Top 10", `${lb.join('\n')}`)
            .setFooter(`We love you all! Thank you for being active!!`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))

        message.channel.send(lbEmbed);
            }
}
