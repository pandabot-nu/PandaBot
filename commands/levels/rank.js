const { Client, Message, lvlsageEmbed, MessageAttachment } = require('discord.js');
const canvacord = require('canvacord')
const Levels = require('discord-xp');

module.exports = {
  name: "rank",
  aliases: ["level", "lvl"],
  permissions: [],
  cooldown: 0,
  description: "Checks rank in server",
  async execute(client, message, args, Discord, profileData) {
    const target = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
    const userID = target.id
    const tarStr = client.users.cache.get(userID)
    const guildID = message.guild.id

    if (target.id == client.user.id) return

    if (target.bot) return

    const user = await Levels.fetch(target.id, message.guild.id, true);

    if (!user) {
      Levels.createUser(userID, guildID);
      return message.channel.send("This user has not earned any xp so far.");
    }
let url = client.users.fetch(userID);

          url.then(function (targetURL) {

            var imgURL = targetURL.displayAvatarURL({format: 'png', size: 512});

    const rank = new canvacord.Rank() // Build the Rank Card= 
    .setAvatar(`${imgURL}`)
    .setCurrentXP(user.cleanXp) // Current User Xp
    .setRequiredXP(user.cleanNextLevelXp) // We calculate the required Xp for the next level
    .setRank(user.position) // Position of the user on the leaderboard
    .setLevel(user.level) // Current Level of the user
    .setStatus(target.presence.status)
    .setProgressBar("PURPLE")
    .setUsername(tarStr.username)
    .setDiscriminator(tarStr.discriminator);

rank.build()
    .then(data => {
    const attachment = new Discord.MessageAttachment(data, "RankCard.png");
    message.channel.send(attachment);
})
})
}
}
