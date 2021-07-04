const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'sleep',
    description: "sleep a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/1ogXB5Y.gif',
            'https://i.imgur.com/8mAd9BE.gif',
            'https://i.imgur.com/7Yo2Ilc.gif',
            'https://i.imgur.com/NYWIlER.gif',
            'https://i.imgur.com/H9QBq4y.gif',
            'https://i.imgur.com/roYf7zV.gif',
            'https://i.imgur.com/SgYnAF5.gif',
            'https://i.imgur.com/nCRHJ4e.gif',
            'https://i.imgur.com/f2YIE6G.gif',
            'https://i.imgur.com/QJdxFe1.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is wishing** ${taggedUser} **goodnight**`)
        } else {
            embed.setDescription(`${message.author} **wants to go to sleep!**`)
        }
        message.channel.send(embed);

    }
};