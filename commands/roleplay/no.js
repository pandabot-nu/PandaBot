const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'no',
    description: "no a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/G2t5hDd.gif',
            'https://i.imgur.com/qlWsUbj.gif',
            'https://i.imgur.com/qUoIqKb.gif',
            'https://i.imgur.com/ItjXAL0.gif',
            'https://i.imgur.com/o0E55XW.gif',
            'https://i.imgur.com/wPaORMt.gif',
            'https://i.imgur.com/ehwPgtE.gif',
            'https://i.imgur.com/YxOquJr.gif',
            'https://i.imgur.com/JsZ388b.gif',
            'https://i.imgur.com/1wRuVOc.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is saying no to** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **said no!**`)
        }
        message.channel.send(embed);

    }
};