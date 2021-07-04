const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'panic',
    description: "panic a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/kmGgfKL.gif',
            'https://i.imgur.com/rmCVa6U.gif',
            'https://i.imgur.com/nyWu5hl.gif',
            'https://i.imgur.com/ThFiu9S.gif',
            'https://i.imgur.com/1dIUM1X.gif',
            'https://i.imgur.com/vbXPRGN.gif',
            'https://i.imgur.com/2IOR6nR.gif',
            'https://i.imgur.com/71TPgMw.gif',
            'https://i.imgur.com/30PtCMd.gif',
            'https://i.imgur.com/P3xni0A.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${taggedUser} **made** ${message.author} **panic!**`)
        } else {
            embed.setDescription(`${message.author} **is panicking!**`)
        }
        message.channel.send(embed);

    }
};