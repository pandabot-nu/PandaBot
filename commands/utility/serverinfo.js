const { MessageEmbed } = require("discord.js")
const moment = require('moment') // npm i moment
moment.locale('en-au')

module.exports = {
    name: "serverinfo",
    aliases: ["si", "serveri", "sinfo"],
    permissions: ["ADMINISTRATOR"],
    description: 'Gives Info About The Server', // Optional
 execute(client, message, args, Discord) {

        const botSize = message.guild.members.cache.filter(m => m.user.bot).size

const { guild } = message
const emojicount = message.guild.emojis.cache 
const members = message.guild.members.cache
        const { name, owner, roles, channels, premiumSubscriptionCount, memberCount, region, server } = message.guild
        message.channel.send(
            new Discord.MessageEmbed()
                .setTitle(name)
                .setDescription(`Some simple server information.`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .addField('Owner', owner.displayName, true)
                .addField('Boosters', premiumSubscriptionCount, true)
                .addField('Boost Level:-', message.guild.premiumTier, true)
                .addField('Region', region.toUpperCase(), true)
                .addField('Roles', roles.cache.size, true)
                .addField('Server ID', message.guild.id, true)
                .addField('Member Count:-', `Total: ${members.size} | Human: ${members.filter(member => !member.user.bot).size} | Bot: ${members.filter(member => member.user.bot).size}`) 
                .addField('Emoji Count:-', `Total: ${emojicount.size} | Non Animated: ${emojicount.filter(emoji => !emoji.animated).size} | Animated: ${emojicount.filter(emoji => emoji.animated).size}`)
                .addField('Channel Count:-', `Category: ${guild.channels.cache.filter(channel => channel.type == 'category').size} | Text: ${guild.channels.cache.filter(channel => channel.type == 'text').size} | Voice: ${guild.channels.cache.filter(channel => channel.type == 'voice').size}`)
.addField('Server Creation Date (UTC):-', moment.utc(message.guild.createdAt).format('LLLL'))
                .setColor('RANDOM')
               
        )
            .catch((e) => message.channel.send(`error: ${e.message}`))
    }
}
