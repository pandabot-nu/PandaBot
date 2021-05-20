const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'glomp',
    description: "glomp a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/UMdCt0y.gif',
            'https://i.imgur.com/P7ZYiRv.gif',
            'https://i.imgur.com/XTmcxeR.gif',
            'https://i.imgur.com/PN0DyBV.gif',
            'https://i.imgur.com/glNja9B.gif',
            'https://i.imgur.com/ZszDsxG.gif',
            'https://i.imgur.com/mOefexj.gif',
            'https://i.imgur.com/qt2DQdy.gif',
            'https://i.imgur.com/F0Rzb1z.gif',
            'https://i.imgur.com/S3i30aD.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **glomped** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **wants to glomp someone!**`)
        }
        message.channel.send(embed);

    }
};