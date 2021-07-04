const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'nom',
    description: "nom a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/Je4j1Cv.gif',
            'https://i.imgur.com/oZMkgVq.gif',
            'https://i.imgur.com/A3FPz50.gif',
            'https://i.imgur.com/ZOGQVrf.gif',
            'https://i.imgur.com/biIfUKJ.gif',
            'https://i.imgur.com/8bm9DPA.gif',
            'https://i.imgur.com/G2nnuwt.gif',
            'https://i.imgur.com/s8kRc7e.gif',
            'https://i.imgur.com/3kgLZwB.gif',
            'https://i.imgur.com/e5Pdnuo.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is nomming on** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **wants to nom on something!**`)
        }
        message.channel.send(embed);

    }
};