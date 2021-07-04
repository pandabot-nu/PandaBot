const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'hate',
    description: "hate a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/SIp65MU.gif',
            'https://i.imgur.com/Ic2u2at.gif',
            'https://i.imgur.com/B6L13cD.gif',
            'https://i.imgur.com/Do3o6Zf.gif',
            'https://i.imgur.com/A9D6L6r.gif',
            'https://i.imgur.com/wZ3IdPV.gif',
            'https://i.imgur.com/l4gLc5r.gif',
            'https://i.imgur.com/ENoRSwB.gif',
            'https://i.imgur.com/BQT0BVm.gif',
            'https://i.imgur.com/Jva5bff.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **hates** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **wants to hate someone!**`)
        }
        message.channel.send(embed);

    }
};