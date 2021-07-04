const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'stab',
    description: "stab a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://i.imgur.com/klA9c17.gif',
            'https://i.imgur.com/TBZloPe.gif',
            'https://i.imgur.com/EGKyjZ1.gif',
            'https://i.imgur.com/48dS9vm.gif',
            'https://i.imgur.com/U1kihb7.gif',
            'https://i.imgur.com/hJGYb8M.gif',
            'https://i.imgur.com/pyYQvwu.gif',
            'https://i.imgur.com/xRhQmwV.gif',
            'https://i.imgur.com/8WZIDA0.gif',
            'https://i.imgur.com/3AXBFxF.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is stabbing** ${taggedUser}`)
        } else {
            embed.setDescription(`${message.author} **wants to stab someone!**`)
        }
        message.channel.send(embed);

    }
};