const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'lurk',
    description: "lurk a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/BWT768F.gif',
            'https://i.imgur.com/nYQPrkD.gif',
            'https://i.imgur.com/gZjlH28.gif',
            'https://i.imgur.com/Dub6Aog.gif',
            'https://i.imgur.com/GVbmAs9.gif',
            'https://i.imgur.com/euriVUz.gif',
            'https://i.imgur.com/S2Nejoj.gif',
            'https://i.imgur.com/0alOdji.gif',
            'https://i.imgur.com/ZT3PyZ8.gif',
            'https://i.imgur.com/ZZkkI8x.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is watching** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **is lurking!**`)
        }
        message.channel.send(embed);

    }
};