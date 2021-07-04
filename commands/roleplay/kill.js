const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'kill',
    description: "kill a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/lWlolXH.gif',
            'https://i.imgur.com/X3IeNbo.gif',
            'https://i.imgur.com/gDM1uHt.gif',
            'https://i.imgur.com/hK0buD6.gif',
            'https://i.imgur.com/hPYYw63.gif',
            'https://i.imgur.com/VdCQfwK.gif',
            'https://i.imgur.com/gPS9SVX.gif',
            'https://i.imgur.com/SSgLwxj.gif',
            'https://i.imgur.com/eCDvqWj.gif',
            'https://i.imgur.com/5Ga7bVY.gif'
        ];
        let gifsYou = [
            'https://i.imgur.com/ZWlX2lI.gif',
            'https://i.imgur.com/8ltexgF.gif',
            'https://i.imgur.com/RIvhuYh.gif',
            'https://i.imgur.com/EZNYOI5.gif',
            'https://i.imgur.com/l5pqq7H.gif',
            'https://i.imgur.com/UPE54wt.gif',
            'https://i.imgur.com/iWavzdw.gif',
            'https://i.imgur.com/NjC8IWJ.gif',
            'https://i.imgur.com/SlRDzTu.gif',
            'https://i.imgur.com/UNN0oLK.gif'
        ];

        let pick = gifs[Math.floor(Math.random() * gifs.length)];
        let pickYou = gifsYou[Math.floor(Math.random() * gifsYou.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');


        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            if (taggedUser === message.author) {
                embed.setDescription(`${message.author} **is staying alive...** ***pouts***`)
                embed.setImage(pickYou);
            }

            else {

                embed.setDescription(`${message.author} **is killing** ${taggedUser}`)
                embed.setImage(pick);
            }

            message.channel.send(embed);

        }
    }
}