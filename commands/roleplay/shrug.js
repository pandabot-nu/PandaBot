const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'shrug',
    description: "shrug a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/d5ae87g.gif',
            'https://i.imgur.com/NKQV2eA.gif',
            'https://i.imgur.com/SyMAPLO.gif',
            'https://i.imgur.com/QtgoNFS.gif',
            'https://i.imgur.com/q4m9Rm4.gif',
            'https://i.imgur.com/6VPfbFB.gif',
            'https://i.imgur.com/GjewsCt.gif',
            'https://i.imgur.com/MGYM1hf.gif',
            'https://i.imgur.com/EwXSw2L.gif',
            'https://i.imgur.com/BaHCrWJ.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **shrugged at** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **shrugs!**`)
        }
        message.channel.send(embed);

    }
};