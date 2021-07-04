const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'laugh',
    description: "laugh at a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/82Tqzn8.gif',
            'https://i.imgur.com/SyljwlZ.gif',
            'https://i.imgur.com/ds7ReeS.gif',
            'https://i.imgur.com/PVfkYec.gif',
            'https://i.imgur.com/ki4E1qr.gif',
            'https://i.imgur.com/FLTb21i.gif',
            'https://i.imgur.com/ZjSjLDn.gif',
            'https://i.imgur.com/ru8of25.gif',
            'https://i.imgur.com/5c6oW4H.gif',
            'https://i.imgur.com/r2NxkQx.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is laughing with** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **is laughing!**`)
        }
        message.channel.send(embed);

    }
};