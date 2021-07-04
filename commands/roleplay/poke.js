const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'poke',
    description: "poke a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/7yjZVgQ.gif',
            'https://i.imgur.com/P0ffz7j.gif',
            'https://i.imgur.com/DIWJGca.gif',
            'https://i.imgur.com/Jr2VmkX.gif',
            'https://i.imgur.com/sBblFIW.gif',
            'https://i.imgur.com/YkfbDmd.gif',
            'https://i.imgur.com/uiMp9AA.gif',
            'https://i.imgur.com/AVVyPfy.gif',
            'https://i.imgur.com/PDOJ9pr.gif',
            'https://i.imgur.com/LlOJzNb.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **poked** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **wants to poke someone!**`)
        }
        message.channel.send(embed);

    }
};