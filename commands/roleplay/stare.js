const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'stare',
    description: "stare a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/0FnWF0c.gif',
            'https://i.imgur.com/NpBaGgm.gif',
            'https://i.imgur.com/V0nCQ3H.gif',
            'https://i.imgur.com/Rvp5eIa.gif',
            'https://i.imgur.com/TdXeGQ6.gif',
            'https://i.imgur.com/3QDxaqm.gif',
            'https://i.imgur.com/SWqXK6G.gif',
            'https://i.imgur.com/c2QkV8X.gif',
            'https://i.imgur.com/1xyK8Gz.gif',
            'https://i.imgur.com/39krv4s.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is staring at** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **is staring into the distance!**`)
        }
        message.channel.send(embed);

    }
};