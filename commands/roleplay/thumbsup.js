const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'thumbsup',
    description: "thumbs up a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/FsFon6a.gif',
            'https://i.imgur.com/NuZSsWk.gif',
            'https://i.imgur.com/dgh3aNy.gif',
            'https://i.imgur.com/RcF9OlA.gif',
            'https://i.imgur.com/5JclmAK.gif',
            'https://i.imgur.com/YObTZTK.gif',
            'https://i.imgur.com/NXUtEAF.gif',
            'https://i.imgur.com/JrzltNp.gif',
            'https://i.imgur.com/r2ie6M9.gif',
            'https://i.imgur.com/eAd8isg.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is giving** ${taggedUser} **a thumbs up**`)
        } else {
            embed.setDescription(`${message.author} **is giving everyone a thumbs up!**`)
        }
        message.channel.send(embed);

    }
};