const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'boop',
    description: "boop a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://media1.tenor.com/images/567ba9e70f306c5ce6432377840437d3/tenor.gif?itemid=14746195',
            'https://media1.tenor.com/images/cbf38a2e97a348a621207c967a77628a/tenor.gif?itemid=6287077',
            'https://media1.tenor.com/images/e4c8d4a42f24ebec003a82147f0c6731/tenor.gif?itemid=7385157',
            'https://media1.tenor.com/images/175cc4686c4c67809f48eef44965c845/tenor.gif?itemid=10217135',
            'https://media1.tenor.com/images/1caed87934a37ac144e9876c9fe8d2a6/tenor.gif?itemid=15643263',
            'https://media1.tenor.com/images/a0f0c6b3ef95bb2ff530a92d6c516cbd/tenor.gif?itemid=14452125',
            'https://media1.tenor.com/images/fde75886df37020bc37d7ba44c1e29ee/tenor.gif?itemid=15255810',
            'https://media1.tenor.com/images/1ca61d7ecff5b3433f9edd71ebd4bc40/tenor.gif?itemid=16935458',
            'https://i.imgur.com/787H2cR.gif',
            'https://64.media.tumblr.com/178c7708c2c54c71f8aff49ebbdd97c2/tumblr_nt4k88ibpf1sfe5ivo1_540.gifv'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **booped** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **wants to boop someone!**`)
        }
        message.channel.send(embed);

    }
};