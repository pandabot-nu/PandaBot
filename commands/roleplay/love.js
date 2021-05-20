const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'love',
    description: "love a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/4GuB6OS.gif',
            'https://i.imgur.com/NMLkjvm.gif',
            'https://i.imgur.com/t6pUpXB.gif',
            'https://i.imgur.com/eZuxYqB.gif',
            'https://i.imgur.com/IiJN0p1.gif',
            'https://i.imgur.com/iuWSUcX.gif',
            'https://i.imgur.com/yRDc5nG.gif',
            'https://i.imgur.com/wSI4zIW.gif',
            'https://i.imgur.com/1SwKeOF.gif',
            'https://i.imgur.com/iHaFVaZ.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **loves** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **loves everyone!**`)
        }
        message.channel.send(embed);

    }
};