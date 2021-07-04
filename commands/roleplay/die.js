const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'die',
    description: "die a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/6YOGAoG.gif',
            'https://i.imgur.com/oO0Drxr.gif',
            'https://i.imgur.com/Fn72vKH.gif',
            'https://i.imgur.com/0qf3Ehu.gif',
            'https://i.imgur.com/jhKbEQE.gif',
            'https://i.imgur.com/KN8IrnW.gif',
            'https://i.imgur.com/plMD3Ki.gif',
            'https://i.imgur.com/CBtQBmF.gif',
            'https://i.imgur.com/BAGpA4T.gif',
            'https://i.imgur.com/oJwhMLU.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **wants** ${taggedUser} **to die!**`)
        } else {
            embed.setDescription(`${message.author} **is dying!**`)
        }
        message.channel.send(embed);

    }
};