const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'lick',
    description: "lick a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/O7f9Ki3.gif',
            'https://i.imgur.com/WKYYR26.gif',
            'https://i.imgur.com/HUiAX6t.gif',
            'https://i.imgur.com/lw5xQFX.gif',
            'https://i.imgur.com/8qFTQVR.gif',
            'https://i.imgur.com/lcydmxL.gif',
            'https://i.imgur.com/aGVXTYe.gif',
            'https://i.imgur.com/U8mSZw6.gif',
            'https://i.imgur.com/bjnEf7f.gif',
            'https://i.imgur.com/KT4qInU.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **licked** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **wants to lick someone!**`)
        }
        message.channel.send(embed);

    }
};