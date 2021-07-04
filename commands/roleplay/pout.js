const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'pout',
    description: "pout a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/7B4OqBL.gif',
            'https://i.imgur.com/mbvfztH.gif',
            'https://i.imgur.com/mteNCFM.gif',
            'https://i.imgur.com/a6ZX3TC.gif',
            'https://i.imgur.com/FCq0xJB.gif',
            'https://i.imgur.com/rtuO8xP.gif',
            'https://i.imgur.com/gR9giJx.gif',
            'https://i.imgur.com/yV0YITW.gif',
            'https://i.imgur.com/16QgLfq.gif',
            'https://i.imgur.com/DdSAULa.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **pouted at** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **is pouting!**`)
        }
        message.channel.send(embed);

    }
};