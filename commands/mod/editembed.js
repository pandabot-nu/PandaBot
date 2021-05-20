const { MessageEmbed, MessageCollector } = require('discord.js')

module.exports = {
    name: "embededit",
    description: "Creates an embedded message!",
    async execute(client, message, args, Discord) {

        const firstEmbed = new MessageEmbed()
            .setTitle('Edit Embed Message')
            .setDescription('What is the message ID of the embed to be edited?')
            .setColor('RANDOM');
        let firstMsg = await message.channel.send(firstEmbed);
        const firstFilter = m => m.author.id === message.author.id;
        const firstCollector = new MessageCollector(message.channel, firstFilter, { max: 2, time: 60000 * 1 }); //1m

        let embedId;
        firstCollector.on('collect', async msg => {
            embedId = msg.content;
            const secondEmbed = new MessageEmbed()
                .setTitle('Edit Embed Message')
                .setDescription('What would you like the embed title to be?')
                .setColor('RANDOM');
            msg.channel.send(secondEmbed);
            firstCollector.stop();

            const secondFilter = m => m.author.id === message.author.id;
            const secondCollector = new MessageCollector(message.channel, secondFilter, { max: 2, time: 60000 * 5 }); //5m

            let embedTitle;
            secondCollector.on('collect', async msg => {
                embedTitle = msg.content;
                const thirdEmbed = new MessageEmbed()
                    .setTitle('Edit Embed Message')
                    .setDescription('What would you like the embed description to be?')
                    .setColor('RANDOM');
                msg.channel.send(thirdEmbed);
                secondCollector.stop();

                const thirdFilter = m => m.author.id === message.author.id;
                const thirdCollector = new MessageCollector(message.channel, thirdFilter, { max: 2, time: 60000 * 5 }); //5m

                let embedDescription;
                thirdCollector.on('collect', async msg => {
                    embedDescription = msg.content;
                    const fourthEmbed = new MessageEmbed()
                        .setTitle('Edit Embed Message')
                        .setDescription('What would you like the embed colour (in hex value please) to be? Type RANDOM if you have no preference.')
                        .setColor('RANDOM');
                    msg.channel.send(fourthEmbed);
                    thirdCollector.stop();

                    const fourthFilter = m => m.author.id === message.author.id;
                    const fourthCollector = new MessageCollector(message.channel, fourthFilter, { max: 2, time: 60000 * 5 }); //5m

                    let embedColor;
                    fourthCollector.on('collect', async msg => {
                        embedColor = msg.content;
                        const fifthEmbed = new MessageEmbed()
                            .setTitle('Edit Embed Message')
                            .setDescription('The setup is now finished!')
                            .setColor('RANDOM');
                        await msg.channel.send(fifthEmbed);
                        fourthCollector.stop();

                        await createEmbedMessage(embedId, embedTitle, embedDescription, embedColor, message)
                    });
                });
            });
        });

        async function createEmbedMessage(embedId, embedTitle, embedDescription, embedColor, message) {
            const oldEmbed = await message.channel.messages.fetch(embedId)
            const sendEmbed = new MessageEmbed(oldEmbed).setTitle(embedTitle).setDescription(embedDescription).setColor(embedColor);

           let msg = await oldEmbed.edit(sendEmbed);

        };
    }
}
