const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'tease',
    description: "teasing a user!",
    execute(client, message, args, Discord) {
        if (message.channel.id !== '779160077605011506')
        return;
        let gifs = [
            'https://i.imgur.com/9fCMf9R.gif',
            'https://i.imgur.com/hp3ilaa.gif',
            'https://i.imgur.com/06Rou4f.gif',
            'https://i.imgur.com/aPg58Hi.gif',
            'https://i.imgur.com/bbgMB2e.gif',
            'https://i.imgur.com/zN8UVwR.gif',
            'https://i.imgur.com/MJzo8xo.gif',
            'https://i.imgur.com/o59hBfy.gif',
            'https://i.imgur.com/U8xT1S3.gif',
            'https://i.imgur.com/1GYLcum.gif',
            'https://i.imgur.com/sphMU5Y.gif',
            'https://i.imgur.com/TThsZMu.gif',
            'https://i.imgur.com/jsBkRHl.gif',
            'https://i.imgur.com/1ftUr9L.gif',
            'https://i.imgur.com/WROGQXB.gif',
            'https://i.imgur.com/7EQzRHo.gif',
            'https://i.imgur.com/q1541pI.gif',
            'https://i.imgur.com/H9SK7si.gif',
            'https://i.imgur.com/3JlpSZa.gif',
            'https://i.imgur.com/u4WJJRX.gif'

        ];

        let pick = gifs[Math.floor(Math.random() * gifs.length)];
        

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is teasing** ${taggedUser}`)
            
        } else {
            embed.setDescription(`${message.author} **is teasing everyone!**`)
            
        }
        message.channel.send(embed);

    }
};