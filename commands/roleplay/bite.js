const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'bite',
    description: "bite a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/Zf03JhM.gif',
            'https://i.imgur.com/3xVONIh.gif',
            'https://i.imgur.com/ztLgd1M.gif',
            'https://i.imgur.com/6X1kUZV.gif',
            'https://i.imgur.com/HhAnOQh.gif',
            'https://i.imgur.com/CcPKaND.gif',
            'https://i.imgur.com/ZkiMwRu.gif',
            'https://i.imgur.com/7xgXtmN.gif',
            'https://i.imgur.com/DvV6fVu.gif',
            'https://i.imgur.com/N35CC0N.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **bit** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **wants to bite someone!**`)
        }
        message.channel.send(embed);

    }
};