const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'sad',
    description: "sad a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/xAEqCxQ.gif',
            'https://i.imgur.com/a2xyd7T.gif',
            'https://i.imgur.com/mahQwra.gif',
            'https://i.imgur.com/ymnv5dF.gif',
            'https://i.imgur.com/m0EjQYK.gif',
            'https://i.imgur.com/8RyWLK8.gif',
            'https://i.imgur.com/sAOzB0P.gif',
            'https://i.imgur.com/cTLwdAk.gif',
            'https://i.imgur.com/jPd7U39.gif',
            'https://i.imgur.com/eN4byih.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is upset with** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **is sad!**`)
        }
        message.channel.send(embed);

    }
};