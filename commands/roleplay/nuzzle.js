const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'nuzzle',
    description: "nuzzle a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/DsmVmto.gif',
            'https://i.imgur.com/WNi81mq.gif',
            'https://i.imgur.com/yuwDZlc.gif',
            'https://i.imgur.com/lPXrxsF.gif',
            'https://i.imgur.com/eXoJZcr.gif',
            'https://i.imgur.com/GOE0U1Y.gif',
            'https://i.imgur.com/unlefc5.gif',
            'https://i.imgur.com/Dg4zRUP.gif',
            'https://i.imgur.com/pv7sZnU.gif',
            'https://i.imgur.com/6fMczeq.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **nuzzled** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **wants to nuzzle someone!**`)
        }
        message.channel.send(embed);

    }
};