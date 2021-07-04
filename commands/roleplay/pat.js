const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'pat',
    description: "pat a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/s2Z18Oq.gif',
            'https://i.imgur.com/XERoexY.gif',
            'https://i.imgur.com/ys4QE24.gif',
            'https://i.imgur.com/bjuJHPr.gif',
            'https://i.imgur.com/8kOyhcB.gif',
            'https://i.imgur.com/JQyttrY.gif',
            'https://i.imgur.com/wLry3Jw.gif',
            'https://i.imgur.com/sf8RFXP.gif',
            'https://i.imgur.com/Fsp5j7O.gif',
            'https://i.imgur.com/9jGGblR.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **gave** ${taggedUser} **a pat!**`)
        } else {
            embed.setDescription(`${message.author} **wants to pat someone!**`)
        }
        message.channel.send(embed);

    }
};