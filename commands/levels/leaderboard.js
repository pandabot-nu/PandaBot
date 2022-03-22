const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');
const Levels = require('discord-xp');

module.exports = {
    name: "levelsleaderboard",
    aliases: ["lleaderboard", "levelslb", "llb", "lb"],
    permissions: [],
    cooldown: 0,
    description: "Plays blackjack against PandaBot for PandaCoins",
    async execute(client, message, args, Discord, profileData) {

        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 20);

        if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

        const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true);

        const lb = leaderboard.map(e => `${e.position}) **${e.username}**\nLevel: ${e.level} | XP: ${e.xp.toLocaleString()}`);

        const lbEmbed = new Discord.MessageEmbed()
            .setColor('#fc6a03')
            .setTitle(`Leaderboard for ${message.guild.name}! <a:blastoff:780247247496544266>`)
            .addField("Top 20", `${lb.join('\n')}`)
            .setFooter(`We love you all! Thank you for being active!!`)

            message.channel.send(lbEmbed);

    }
}
