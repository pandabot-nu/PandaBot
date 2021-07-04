const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'chase',
    description: "chase a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/iRqnNvo.gif',
            'https://i.imgur.com/EVXic4e.gif',
            'https://i.imgur.com/aZFX9DC.gif',
            'https://i.imgur.com/GeVxRXq.gif',
            'https://i.imgur.com/Tk6chSY.gif',
            'https://i.imgur.com/cnRQ3m0.gif',
            'https://i.imgur.com/VEiBd05.gif',
            'https://i.imgur.com/PSjiQ5m.gif',
            'https://i.imgur.com/PqrIism.gif',
            'https://i.imgur.com/aOtQB1L.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is chasing** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **wants to chase someone!**`)
        }
        message.channel.send(embed);

    }
};