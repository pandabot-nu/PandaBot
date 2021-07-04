const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'feed',
    description: "feeds a user!",
    execute(client, message, args, Discord) {
        let gifsAlone = [
            'https://i.imgur.com/sLiFZjj.gif',
            'https://i.imgur.com/4CT8bFm.gif',
            'https://i.imgur.com/bFKD7mi.gif',
            'https://i.imgur.com/ktBeWcY.gif',
            'https://i.imgur.com/gAeF303.gif',
            'https://i.imgur.com/MrsDVto.gif',
            'https://i.imgur.com/SIv86JR.gif',
            'https://i.imgur.com/glATN1s.gif',
            'https://i.imgur.com/RdH756n.gif',
            'https://i.imgur.com/qB1Ldnl.gif'
        ];
        let gifsTogether = [
            'https://i.imgur.com/MgW9jns.gif',
            'https://i.imgur.com/uDBVSAs.gif',
            'https://i.imgur.com/meMF371.gif',
            'https://i.imgur.com/ExzoJQ3.gif',
            'https://i.imgur.com/nkB1FBl.gif',
            'https://i.imgur.com/lXs0LL4.gif',
            'https://i.imgur.com/C7NGaCa.gif',
            'https://i.imgur.com/5pxcn6J.gif',
            'https://i.imgur.com/LOvbfyA.gif',
            'https://i.imgur.com/z6QJn6C.gif'
        ];

        let pickAlone = gifsAlone[Math.floor(Math.random() * gifsAlone.length)];
        let pickTogether = gifsTogether[Math.floor(Math.random() * gifsTogether.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is feeding** ${taggedUser}`)
            embed.setImage(pickTogether);
        } else {
            embed.setDescription(`${message.author} **is hungry!**`)
            embed.setImage(pickAlone);
        }
        message.channel.send(embed);

    }
};