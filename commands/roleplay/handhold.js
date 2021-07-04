const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'handhold',
    description: "hold hands with a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/j3MSvFh.gif',
            'https://i.imgur.com/yYfBRni.gif',
            'https://i.imgur.com/w3m8l77.gif',
            'https://i.imgur.com/rUQQAgC.gif',
            'https://i.imgur.com/eQ5MJpE.gif',
            'https://i.imgur.com/jc7K358.gif',
            'https://i.imgur.com/JWnGXGX.gif',
            'https://i.imgur.com/HFHUPE2.gif',
            'https://i.imgur.com/Tz1Wbsi.gif',
            'https://i.imgur.com/yHoP7tc.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **held hands with** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **wants to hold hands with someone!**`)
        }
        message.channel.send(embed);

    }
};