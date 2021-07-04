const { MessageEmbed } = require("discord.js")



module.exports = {

    name: 'sulk',
    description: "sulk a user!",
    execute(client, message, args, Discord) {
        let gifs = [
          'https://i.imgur.com/BmMEEJO.gif',
          'https://i.imgur.com/AD4lwD6.gif',
          'https://i.imgur.com/Ckees3z.gif',
          'https://i.imgur.com/C5Zy6tK.gif',
          'https://i.imgur.com/jlWEzAf.gif',
          'https://i.imgur.com/29u7DA4.gif',
          'https://i.imgur.com/7FRfez1.gif',
          'https://i.imgur.com/XDDHsFl.gif',
          'https://i.imgur.com/1ygPPtl.gif',
          'https://i.imgur.com/CDTO6br.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is sulking at** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **is sulking!**`)
        }
        message.channel.send(embed);

    }
};