const { MessageEmbed, Guild } = require("discord.js")

module.exports = {

    name: 'fuck',
    description: "hehehe a user!",
    execute(client, message, args, Discord) {
        if (message.channel.id !== '779160077605011506')
        return;
        let gifs = [
            'https://i.imgur.com/82zdsC4.gif',
            'https://i.imgur.com/fEPN5YV.gif',
            'https://i.imgur.com/YMY2y5Y.gif',
            'https://i.imgur.com/JzIcR3c.gif',
            'https://i.imgur.com/pmMVE4v.gif',
            'https://i.imgur.com/izlkTGp.gif',
            'https://i.imgur.com/jzUt7Fs.gif',
            'https://i.imgur.com/swSMFNM.gif',
            'https://i.imgur.com/7pOR2kx.gif',
            'https://i.imgur.com/aDsIatW.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is bow-chicka-wow-wow-ing** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **wants to bow-chicka-wow-wow!**`)
        }
        message.channel.send(embed);

    }
};