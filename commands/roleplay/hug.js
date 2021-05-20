const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'hug',
    description: "hug a user in anime!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/ynvfan6.gif',
            'https://i.imgur.com/YW7bHkj.gif',
            'https://i.imgur.com/qNpQ1Jh.gif',
            'https://i.imgur.com/4rnjJrB.gif',
            'https://i.imgur.com/exKolEK.gif',
            'https://i.imgur.com/bRY7q0N.gif',
            'https://i.imgur.com/1njbrsQ.gif',
            'https://i.imgur.com/EouHz2P.gif',
            'https://i.imgur.com/GRTmSXL.gif',
            'https://i.imgur.com/pIb0f5Y.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **gave** ${taggedUser} **a hug!** `)
        } else {
            return message.channel.send(`${message.author} **wants to hug someone!**`)
        }
        message.channel.send(embed);

    }
};