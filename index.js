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

const Levels = require("discord-xp");
Levels.setURL(process.env.MONGODB_SRV)

client.login(process.env.TOKEN);
client.cachedMessageReactions = new Map();

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ok');
});
server.listen(8080);
