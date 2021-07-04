const { MessageEmbed, MessageCollector } = require('discord.js')

module.exports = {
    name: "embedcreate",
    description: "Creates an embedded message!",
    async execute(client, message, args, Discord) {

        const firstEmbed = new MessageEmbed()
            .setTitle('New Embed Message Setup')
            .setDescription('What would you like the embed title to be?')
            .setColor('RANDOM');
        let firstMsg = await message.channel.send(firstEmbed);
        const firstFilter = m => m.author.id === message.author.id;
        const firstCollector = new MessageCollector(message.channel, firstFilter, { max: 2, time: 60000 * 1 }); //1m

        let embedTitle;
        firstCollector.on('collect', async msg => {
            embedTitle = msg.content;
            const secondEmbed = new MessageEmbed()
                .setTitle('New Embed Message Setup')
                .setDescription('What would you like the embed description to be?')
                .setColor('RANDOM');
            msg.channel.send(secondEmbed);
            firstCollector.stop();

            const secondFilter = m => m.author.id === message.author.id;
            const secondCollector = new MessageCollector(message.channel, secondFilter, { max: 2, time: 60000 * 5 }); //5m

            let embedDescription;
            secondCollector.on('collect', async msg => {
                embedDescription = msg.content;
                const thirdEmbed = new MessageEmbed()
                    .setTitle('New Embed Message Setup')
                    .setDescription('What would you like the embed colour (in hex value please) to be?')
                    .setColor('RANDOM');
                msg.channel.send(thirdEmbed);
                secondCollector.stop();

                const thirdFilter = m => m.author.id === message.author.id;
                const thirdCollector = new MessageCollector(message.channel, thirdFilter, { max: 2, time: 60000 * 5 }); //5m

                let embedColor;
                thirdCollector.on('collect', async msg => {
                    embedColor = msg.content;
                    const fourthEmbed = new MessageEmbed()
                        .setTitle('New Embed Message Setup')
                        .setDescription('Where would you like the message sent?')
                        .setColor('RANDOM');
                    msg.channel.send(fourthEmbed);
                    thirdCollector.stop();

                    const fourthFilter = m => m.author.id === message.author.id;
                    const fourthCollector = new MessageCollector(message.channel, fourthFilter, { max: 2, time: 60000 * 2 }); //2m

                    let EmbedChannel;
                    fourthCollector.on('collect', async msg => {
                        EmbedChannel = msg.mentions.channels.first();
                        if (!EmbedChannel) {
                            msg.channel.send('PandaBot says that is not a valid channel. Please request the command again.');
                            fourthCollector.stop();
                            return
                        }

                        const fifthEmbed = new MessageEmbed()
                            .setTitle('New Embed Message Setup')
                            .setDescription('The setup is now finished!')
                            .setColor('RANDOM');
                        await msg.channel.send(fifthEmbed);
                        fourthCollector.stop();
                        await createEmbedMessage(embedTitle, embedDescription, embedColor, EmbedChannel, message)
                    });
                });
            });
        });
        async function createEmbedMessage(embedTitle, embedDescription, embedColor, EmbedChannel, message) {
            const sendEmbed = new MessageEmbed()
                .setTitle(embedTitle)
                .setDescription(embedDescription)
                .setColor(embedColor);

            let msg = await EmbedChannel.send(sendEmbed);
        };
    }
}
