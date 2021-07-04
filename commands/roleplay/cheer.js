const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'cheer',
    description: "cheer at a user!",
    execute(client, message, args, Discord) {
        let gifs = [
            'https://media1.tenor.com/images/90fcbf5bf03ba69fff50a565b330d7ea/tenor.gif?itemid=12479115',
            'https://media1.tenor.com/images/877cf5030e5caf33eafe5b3fef32e98c/tenor.gif?itemid=9439253',
            'https://media1.tenor.com/images/1d5f7d4326f3e55ba75c3a7edaa8af32/tenor.gif?itemid=10740306',
            'https://media1.tenor.com/images/97e86f10ee6e482c62a5186fc11b7697/tenor.gif?itemid=10018913',
            'https://media1.tenor.com/images/296818513b48a1639a837ea68d4eda46/tenor.gif?itemid=5205820',
            'https://media1.tenor.com/images/bd5e4f3a51515ed0ed3e41378f71d503/tenor.gif?itemid=5988593',
            'https://i.pinimg.com/originals/62/d8/95/62d8959cfbcd573cc9141553ea935c96.gif',
            'https://media.giphy.com/media/m8Z2UqDYU20SY/giphy.gif',
            'https://media1.tenor.com/images/aaa2caca95360cf901a65640738d3d9f/tenor.gif?itemid=14835419',
            'https://i.kym-cdn.com/photos/images/original/001/369/020/44a.gif'
        ];
        let pick = gifs[Math.floor(Math.random() * gifs.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        embed.setImage(pick);

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **cheered** ${taggedUser} **on!**`)
        } else {
            embed.setDescription(`${message.author} **is cheering!**`)
        }
        message.channel.send(embed);

    }
};