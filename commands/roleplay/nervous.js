const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'nervous',
    description: "nervous a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/9IKv7eL.gif',
            'https://i.imgur.com/6E6eUpB.gif',
            'https://i.imgur.com/zp5S0Cv.gif',
            'https://i.imgur.com/HvK5xv8.gif',
            'https://i.imgur.com/9w0fGnh.gif',
            'https://i.imgur.com/zvSrWxw.gif',
            'https://i.imgur.com/gL2GOcm.gif',
            'https://i.imgur.com/lfChQF4.gif',
            'https://i.imgur.com/MKmDRng.gif',
            'https://i.imgur.com/ARbEawx.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is nervous of** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **is nervous!**`)
        }
        message.channel.send(embed);

    }
};