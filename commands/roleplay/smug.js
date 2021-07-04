const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'smug',
    description: "smug a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/uHeXiq3.gif',
            'https://i.imgur.com/IldzkBY.gif',
            'https://i.imgur.com/E5P38KT.gif',
            'https://i.imgur.com/ysPPSJq.gif',
            'https://i.imgur.com/wdBhUei.gif',
            'https://i.imgur.com/XPH8SSf.gif',
            'https://i.imgur.com/zcHmXIr.gif',
            'https://i.imgur.com/vuifuJ4.gif',
            'https://i.imgur.com/ucvzFHa.gif',
            'https://i.imgur.com/UcWAE8e.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is looking at** ${taggedUser} **smugly**`)
        } else {
            embed.setDescription(`${message.author} **is smug!**`)
        }
        message.channel.send(embed);

    }
};