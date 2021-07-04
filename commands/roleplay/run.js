const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'run',
    description: "run a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/kGUw4JE.gif',
            'https://i.imgur.com/WDvIpFz.gif',
            'https://i.imgur.com/xVSxAsn.gif',
            'https://i.imgur.com/tIGu7yu.gif',
            'https://i.imgur.com/yMhxtme.gif',
            'https://i.imgur.com/zeiNmLQ.gif',
            'https://i.imgur.com/un7tGJy.gif',
            'https://i.imgur.com/xw1bRyX.gif',
            'https://i.imgur.com/Doa33Na.gif',
            'https://i.imgur.com/AMtFSwf.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is running from** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **is running away!**`)
        }
        message.channel.send(embed);

    }
};