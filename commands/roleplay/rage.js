const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'rage',
    description: "rage a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/58b5cpG.gif',
            'https://i.imgur.com/9HiPLQB.gif',
            'https://i.imgur.com/UQzGV8g.gif',
            'https://i.imgur.com/W4lVM6Z.gif',
            'https://i.imgur.com/Co5nsNW.gif',
            'https://i.imgur.com/5xEg7b9.gif',
            'https://i.imgur.com/2Un4JuW.gif',
            'https://i.imgur.com/3zYWbzB.gif',
            'https://i.imgur.com/zVcDUEJ.gif',
            'https://i.imgur.com/ypeKiKe.gif',
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is raging at** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **is TrIgGeReD!**`)
        }
        message.channel.send(embed);

    }
};