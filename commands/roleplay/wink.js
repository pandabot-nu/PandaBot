const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'wink',
    description: "wink at a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/7mhitYW.gif',
            'https://i.imgur.com/rI6fWnj.gif',
            'https://i.imgur.com/z7sD5G5.gif',
            'https://i.imgur.com/P3LUZzz.gif',
            'https://i.imgur.com/6rfVA0o.gif',
            'https://i.imgur.com/SZzjPls.gif',
            'https://i.imgur.com/LU9hEnP.gif',
            'https://i.imgur.com/Ez82oH3.gif',
            'https://i.imgur.com/VHW5jmP.gif',
            'https://i.imgur.com/EQBLLIa.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is winking at** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **is winking at everyone!**`)
        }
        message.channel.send(embed);

    }
};