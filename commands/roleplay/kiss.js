const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'kiss',
    description: "kiss a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/zzGgRoh.gif',
            'https://i.imgur.com/6ql7w3o.gif',
            'https://i.imgur.com/WcWc0Nu.gif',
            'https://i.imgur.com/missEjI.gif',
            'https://i.imgur.com/RNGM0lF.gif',
            'https://i.imgur.com/UYB5byR.gif',
            'https://i.imgur.com/IPotBCP.gif',
            'https://i.imgur.com/MSSQcx7.gif',
            'https://i.imgur.com/titVZ4l.gif',
            'https://i.imgur.com/TYVu6Ad.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **kissed** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **wants to kiss someone!**`)
        }
        message.channel.send(embed);

    }
};