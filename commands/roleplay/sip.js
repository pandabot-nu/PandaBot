const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'sip',
    description: "sip a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/nIZIH4P.gif',
            'https://i.imgur.com/7gttH6Z.gif',
            'https://i.imgur.com/cKVxsXb.gif',
            'https://i.imgur.com/DvQEBr4.gif',
            'https://i.imgur.com/mjzPsbX.gif',
            'https://i.imgur.com/GAhqcHT.gif',
            'https://i.imgur.com/fFcLgLL.gif',
            'https://i.imgur.com/l2FSfoJ.gif',
            'https://i.imgur.com/89YoNyo.gif',
            'https://i.imgur.com/sNLXOq3.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is drinking with** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **is having a drink!**`)
        }
        message.channel.send(embed);

    }
};