const { MessageEmbed, MessageCollector } = require('discord.js')

module.exports = {
    name: "ec",
    description: "Creates an embedded message!",
    async execute(client, message, args, Discord) {

   
        let firstMsg = await message.channel.send('What would you like the embed title to be?');
        const firstFilter = m => m.author.id === message.author.id;
        const firstCollector = new MessageCollector(message.channel, firstFilter, { max: 2, time: 60000 * 1 }); //1m

        let embedTitle;
        firstCollector.on('collect', async msg => {
            embedTitle = msg.content;
            msg.channel.send('What would you like the embed description to be?');
            firstCollector.stop();

            const secondFilter = m => m.author.id === message.author.id;
            const secondCollector = new MessageCollector(message.channel, secondFilter, { max: 2, time: 60000 * 5 }); //5m

            let embedDescription;
            secondCollector.on('collect', async msg => {
                embedDescription = msg.content;
                msg.channel.send('What would you like the embed colour in hex value to be? If you have no preference, please type RANDOM.');
                secondCollector.stop();

                const thirdFilter = m => m.author.id === message.author.id;
                const thirdCollector = new MessageCollector(message.channel, thirdFilter, { max: 2, time: 60000 * 5 }); //5m

                let embedColor;
                thirdCollector.on('collect', async msg => {
                    embedColor = msg.content;
                    msg.channel.send('Where would you like the message sent?');
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
                        await msg.channel.send('The embed setup is now complete.');
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