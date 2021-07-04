const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'wave',
    description: "wave at a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/H0f2q4G.gif',
            'https://i.imgur.com/P5NX82b.gif',
            'https://i.imgur.com/AAhOK3L.gif',
            'https://i.imgur.com/4kiJLQN.gif',
            'https://i.imgur.com/AkkL3he.gif',
            'https://i.imgur.com/CLiZdc2.gif',
            'https://i.imgur.com/bJxMu8a.gif',
            'https://i.imgur.com/SNXV5b9.gif',
            'https://i.imgur.com/NvBnSx5.gif',
            'https://i.imgur.com/Apw4hrM.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is waving at** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **is waving at everyone!**`)
        }
        message.channel.send(embed);

    }
};