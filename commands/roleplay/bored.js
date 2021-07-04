const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'bored',
    description: "bored a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/J4OxTE2.gif',
            'https://i.imgur.com/g9epR0N.gif',
            'https://i.imgur.com/0j2EVzE.gif',
            'https://i.imgur.com/ymZckbM.gif',
            'https://i.imgur.com/G3hNqnQ.gif',
            'https://i.imgur.com/ZomnDpD.gif',
            'https://i.imgur.com/QbAm65F.gif',
            'https://i.imgur.com/bkVQ74V.gif',
            'https://i.imgur.com/uvXE00M.gif',
            'https://i.imgur.com/l7AgFPV.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is bored with** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **is bored!**`)
        }
        message.channel.send(embed);

    }
};