const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'highfive',
    description: "highfived a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/EgLsU0J.gif',
            'https://i.imgur.com/pifAX2k.gif',
            'https://i.imgur.com/0CbAEtX.gif',
            'https://i.imgur.com/Mdee2rE.gif',
            'https://i.imgur.com/aNeujP8.gif',
            'https://i.imgur.com/CW2jn75.gif',
            'https://i.imgur.com/65rOfyJ.gif',
            'https://i.imgur.com/9c4TQpL.gif',
            'https://i.imgur.com/ZWvmimx.gif',
            'https://i.imgur.com/JIdyy6E.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **high-fived** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **wants to high-five someone!**`)
        }
        message.channel.send(embed);

    }
};