const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'think',
    description: "think a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/UhZbvwJ.gif',
            'https://i.imgur.com/BP239Tw.gif',
            'https://i.imgur.com/rUdwK2O.gif',
            'https://i.imgur.com/1mln1Je.gif',
            'https://i.imgur.com/WVacxEc.gif',
            'https://i.imgur.com/SLiE97Y.gif',
            'https://i.imgur.com/ezVnwp2.gif',
            'https://i.imgur.com/TMEQYuw.gif',
            'https://i.imgur.com/maM70tZ.gif',
            'https://i.imgur.com/dfLThSe.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is scheming with** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **is thinking!**`)
        }
        message.channel.send(embed);

    }
};