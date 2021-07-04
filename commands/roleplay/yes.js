const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'yes',
    description: "yes a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/HpD8Tfw.gif',
            'https://i.imgur.com/M7gntYJ.gif',
            'https://i.imgur.com/Xzjf0Hk.gif',
            'https://i.imgur.com/JGtNWTr.gif',
            'https://i.imgur.com/SGFpfgc.gif',
            'https://i.imgur.com/AZkQgOf.gif',
            'https://i.imgur.com/4Lcz0et.gif',
            'https://i.imgur.com/rc0ctqq.gif',
            'https://i.imgur.com/mp2IDZE.gif',
            'https://i.imgur.com/WkBkN3L.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is saying yes to** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **is sayhing yes!**`)
        }
        message.channel.send(embed);

    }
};