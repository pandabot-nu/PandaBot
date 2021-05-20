const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'happy',
    description: "happy command!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/IJCmrIt.gif',
            'https://i.imgur.com/2ivoMBJ.gif',
            'https://i.imgur.com/9eNZ37M.gif',
            'https://i.imgur.com/MB7NSzz.gif',
            'https://i.imgur.com/fp0xh5r.gif',
            'https://i.imgur.com/5xIPfRJ.gif',
            'https://i.imgur.com/GVueBE0.gif',
            'https://i.imgur.com/HcjVc0y.gif',
            'https://i.imgur.com/lBqyONG.gif',
            'https://i.imgur.com/LhLGV5u.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is happy with** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **is happy!**`)
        }
        message.channel.send(embed);

    }
};