const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'tickle',
    description: "tickles a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/c0hB7O3.gif',
            'https://i.imgur.com/UvTZFo9.gif',
            'https://i.imgur.com/qWc9wTB.gif',
            'https://i.imgur.com/WK4lVwI.gif',
            'https://i.imgur.com/S4V6Srg.gif',
            'https://i.imgur.com/C7n6XCL.gif',
            'https://i.imgur.com/ihtBNlY.gif',
            'https://i.imgur.com/l81mbB3.gif',
            'https://i.imgur.com/j5U4epK.gif',
            'https://media1.tenor.com/images/d38554c6e23b86c81f8d4a3764b38912/tenor.gif?itemid=11379131'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is tickling** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **wants to tickle someone!**`)
        }
        message.channel.send(embed);

    }
};