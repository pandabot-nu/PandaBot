const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'bonk',
    description: "bonk a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/vnMXmC2.gif',
            'https://i.imgur.com/LYMSvKb.gif',
            'https://i.imgur.com/SNq4WuF.gif',
            'https://i.imgur.com/bjuN2t6.gif',
            'https://i.imgur.com/ZAQ5WJa.gif',
            'https://i.imgur.com/cxrxoQQ.gif',
            'https://i.imgur.com/6nnGsSw.gif',
            'https://i.imgur.com/tCEKnic.gif',
            'https://i.imgur.com/YIDsRcB.gif',
            'https://i.imgur.com/yQC2OCI.gif',
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **bonked** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **wants to bonk someone!**`)
        }
        message.channel.send(embed);

    }
};