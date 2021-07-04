const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'shoot',
    description: "shoot a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/2zdoWaw.gif',
            'https://i.imgur.com/fV0rTAI.gif',
            'https://i.imgur.com/wLK1SB9.gif',
            'https://i.imgur.com/xjRpkrj.gif',
            'https://i.imgur.com/fLaslPt.gif',
            'https://i.imgur.com/LNYryOG.gif',
            'https://i.imgur.com/IGbXY7k.gif',
            'https://i.imgur.com/WzP4GKz.gif',
            'https://i.imgur.com/95HlMVR.gif',
            'https://i.imgur.com/z09AB6k.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is shooting at** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **wants to shoot someone!**`)
        }
        message.channel.send(embed);

    }
};