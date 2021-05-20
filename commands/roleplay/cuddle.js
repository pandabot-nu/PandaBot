const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'cuddle',
    description: "cuddle a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://media1.tenor.com/images/8cbe0edadc12ca1056d5eb685a4c27f6/tenor.gif?itemid=14518537',
            'https://media1.tenor.com/images/adeb030aaa5a2a3d16abdc58be4d1448/tenor.gif?itemid=11733535',
            'https://media1.tenor.com/images/c51d8a4505e1dfef709efd4739d09faa/tenor.gif?itemid=5754133',
            'https://media1.tenor.com/images/c445e2665d12cfda0921291d919cbe9a/tenor.gif?itemid=15069987',
            'https://cutewallpaper.org/21/anime-cuddling-couple/Best-Couple-Hugging-Gif-GIFs-Gfycat.gif',
            'https://i.imgur.com/ntqYLGl.gif',
            'https://media1.tenor.com/images/ed69bb1f0bb0ff8485ce13a5dce5ad04/tenor.gif?itemid=13327156',
            'https://media1.tenor.com/images/68cc73bdd66f0467ceb3e49ce5967dbc/tenor.gif?itemid=12668756',
            'https://i.imgur.com/WkCaCku.gif',
            'https://img.wattpad.com/6339660f123466989469f0592d9ac40ab1bb4676/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6736493972622d52303079375a773d3d2d313033303637343835342e313636363564636330306531373063303834393736323138373433342e676966'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **cuddled** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **wants to cuddle someone!**`)
        }
        message.channel.send(embed);

    }
};