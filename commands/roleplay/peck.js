const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'peck',
    description: "peck a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/poQYpJw.gif',
            'https://i.imgur.com/3MDZxJd.gif',
            'https://i.imgur.com/VPAFEKo.gif',
            'https://i.imgur.com/R4Yf0uJ.gif',
            'https://i.imgur.com/aNBKEeN.gif',
            'https://i.imgur.com/FRIhO1w.gif',
            'https://i.imgur.com/yHm96AU.gif',
            'https://i.imgur.com/SzzSnAb.gif',
            'https://i.imgur.com/uzs6lTQ.gif',
            'https://i.imgur.com/xUDSstE.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **gave** ${taggedUser} **a peck!**`)
        } else {
            embed.setDescription(`${message.author} **wants to peck someone!**`)
        }
        message.channel.send(embed);

    }
};