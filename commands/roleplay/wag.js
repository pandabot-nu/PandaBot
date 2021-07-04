const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'wag',
    description: "wag at a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/zQ1g8Fl.gif',
            'https://i.imgur.com/3dLIUvW.gif',
            'https://i.imgur.com/dUedwdM.gif',
            'https://i.imgur.com/6hNcdQB.gif',
            'https://i.imgur.com/nwQWiA0.gif',
            'https://i.imgur.com/2eEigq3.gif',
            'https://i.imgur.com/Kwu9oFB.gif',
            'https://i.imgur.com/E0XSOF4.gif',
            'https://i.imgur.com/LsuBL7l.gif',
            'https://i.imgur.com/QDnh3st.gif'

        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is wagging their tail at** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **is wagging their tail!**`)
        }
        message.channel.send(embed);

    }
};