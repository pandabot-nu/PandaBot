const { MessageEmbed } = require("discord.js")

module.exports = {

    name: 'dance',
    description: "dances with a user!",
    execute(client, message, args, Discord) {
        let gifsAlone = [
            'https://steamuserimages-a.akamaihd.net/ugc/949591360442956482/36FE7B5B41F7C3B58195AE4E0837FEC0763857DB/',
            'https://pa1.narvii.com/6620/2a3ad2923c65dd6cbe53fc58ab90c063b0e7cd6e_hq.gif',
            'https://media.tenor.com/images/4fd49de4149a6d348e04f2465a3970af/tenor.gif',
            'https://i.imgur.com/cjcYrqI.gif',
            'https://bestanimations.com/media/anime-dancing/1821875339anime-kawaii-cute-dance-animated-gif-image-13.gif',
            'https://media1.tenor.com/images/01815cce962b285887dd00aeac220784/tenor.gif?itemid=16325279',
            'https://media1.tenor.com/images/21e860a31f32d5e3e6bdf2963cadfebf/tenor.gif?itemid=5897404',
            'http://cdn.awwni.me/mzq7.gif',
            'https://i.imgur.com/BbIar.gif',
            'https://media1.tenor.com/images/8fdcda26512797826631511017a11f93/tenor.gif?itemid=9765182'
        ];
        let gifsTogether = [
            'https://i2.wp.com/kakuchopurei.com/wp-content/uploads/2019/02/17fateprismaillya.gif?resize=422%2C238&ssl=1',
            'https://i1.wp.com/kakuchopurei.com/wp-content/uploads/2019/02/15free.gif?resize=422%2C238&ssl=1',
            'https://pa1.narvii.com/6005/c55e9d6dcff3b625bde71807fa91bba412b553ae_hq.gif',
            'https://d2w9rnfcy7mm78.cloudfront.net/2145256/original_cd9c01187cead45cd791beafa78f7e08.gif?1525707539',
            'https://steamuserimages-a.akamaihd.net/ugc/826818638582871330/0D7428A63D93AD69129192586FC06DC57D17D8B3/',
            'https://pa1.narvii.com/6570/1770a6095b80279dad125b48028939a629d0257b_hq.gif',
            'https://i.kym-cdn.com/photos/images/newsfeed/001/263/922/455.gif',
            'https://images6.fanpop.com/image/photos/33500000/anime-dancer-msyugioh123-33558535-500-223.gif',
            'https://i2.wp.com/kakuchopurei.com/wp-content/uploads/2019/02/luckystar_dance.gif?resize=440%2C248&ssl=1',
            'https://media1.tenor.com/images/5d1fa5725a8dd53a379562948c15f312/tenor.gif?itemid=17572101'


        ];

        let pickAlone = gifsAlone[Math.floor(Math.random() * gifsAlone.length)];
        let pickTogether = gifsTogether[Math.floor(Math.random() * gifsTogether.length)];

        const target = message.mentions.members.first()
        let embed = new Discord.MessageEmbed();
        embed.setColor('#FFDBE9');
        

        if (args[0]) {
            const taggedUser = message.mentions.users.first();
            embed.setDescription(`${message.author} **is dancing with** ${taggedUser}`)
            embed.setImage(pickTogether);
        } else {
            embed.setDescription(`${message.author} **is dancing!**`)
            embed.setImage(pickAlone);
        }
        message.channel.send(embed);

    }
};