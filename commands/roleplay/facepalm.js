const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'facepalm',
    description: "facepalm a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/HdFzFXy.gif',
            'https://i.imgur.com/XVT4eKx.gif',
            'https://i.imgur.com/qA7S3Tb.gif',
            'https://i.imgur.com/S0W4FuY.gif',
            'https://i.imgur.com/v621LPp.gif',
            'https://i.imgur.com/Ii2s9JP.gif',
            'https://i.imgur.com/MQ396Go.gif',
            'https://i.imgur.com/cTYVa7j.gif',
            'https://i.imgur.com/3He0UQo.gif',
            'https://i.imgur.com/lWh1X4U.gif',
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${taggedUser} **made** ${message.author} **facepalm**`)
        } else {
            embed.setDescription(`${message.author} **is facepalming!**`)
        }
        message.channel.send(embed);

    }
};