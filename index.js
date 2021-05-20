require('dotenv').config();
const Discord = require('discord.js')
const prefix = process.env.PREFIX
const client = new Discord.Client({ partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'] })

client.commands = new Discord.Collection();
client.database = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
})

client.login(process.env.TOKEN);
client.cachedMessageReactions = new Map();
