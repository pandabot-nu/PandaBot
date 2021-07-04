const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'blush',
    description: "blush at a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://media1.tenor.com/images/5ea40ca0d6544dbf9c0074542810e149/tenor.gif?itemid=14841901',
            'https://media1.tenor.com/images/cbfd2a06c6d350e19a0c173dec8dccde/tenor.gif?itemid=15727535',
            'https://media1.tenor.com/images/f72035e032125a5395883b8d68d9df5d/tenor.gif?itemid=16149781',
            'https://media1.tenor.com/images/82b0f0a24e1621510b1216317edd4ba0/tenor.gif?itemid=14119517',
            'https://media1.tenor.com/images/a7e87466022015e036c06c3927c251f9/tenor.gif?itemid=8971744',
            'https://media1.tenor.com/images/09d75740089598b54342df3641dbbffc/tenor.gif?itemid=5615361',
            'https://media1.tenor.com/images/b4ebe6c9c4786dd32b51dd346135b625/tenor.gif?itemid=5881549',
            'https://media1.tenor.com/images/7fddbaa08668ce16a00e5a81d09610d8/tenor.gif?itemid=11034207',
            'https://media1.tenor.com/images/f1147d6812cdfed3206f2119c9a5c2b8/tenor.gif?itemid=11744582',
            'https://media1.tenor.com/images/18228918a5722dfd666963cc28d372f8/tenor.gif?itemid=6091838'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **blushed at** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **is blushing!**`)
        }
        message.channel.send(embed);

    }
};