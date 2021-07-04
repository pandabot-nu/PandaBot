const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'cringe',
    description: "cringes at a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/1OpSaAY.gif',
            'https://i.imgur.com/DiJSWtp.gif',
            'https://i.imgur.com/vI15LK5.gif',
            'https://i.imgur.com/cSON1kz.gif',
            'https://i.imgur.com/dwGri3c.gif',
            'https://i.imgur.com/z2ay7ei.gif',
            'https://i.imgur.com/YvfxHFT.gif',
            'https://i.imgur.com/gU1CAD6.gif',
            'https://i.imgur.com/Ar8mUbn.gif',
            'https://i.imgur.com/ptALtFl.gif'
            
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **cringeed at** ${taggedUser}`)
        } else {
            embed.setDescription(`**That made** ${message.author} **cringe!**`)
        }
        message.channel.send(embed);

    }
};