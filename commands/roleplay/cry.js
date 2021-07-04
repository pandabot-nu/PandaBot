const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'cry',
    description: "cry a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/a3Tly9H.gif',
            'https://i.imgur.com/GDCJjAu.gif',
            'https://i.imgur.com/qzuBrM5.gif',
            'https://i.imgur.com/aFnPprg.gif',
            'https://i.imgur.com/rj4lI88.gif',
            'https://i.imgur.com/bLCPF1Q.gif',
            'https://i.imgur.com/4iIO19q.gif',
            'https://i.imgur.com/x7oTQSi.gif',
            'https://i.imgur.com/D4v0jud.gif',
            'https://i.imgur.com/RsRczCc.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${taggedUser} **made** ${message.author} **cry!**`)
        } else {
            embed.setDescription(`${message.author} **is crying!**`)
        }
        message.channel.send(embed);

    }
};