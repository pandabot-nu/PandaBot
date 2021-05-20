module.exports = {
    name: 'clear',
    description: "this clears messages!",
    async execute(client, message, args, Discord) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            (message.channel.send("PandaBot says you do not have permission to clear messages! 🐼"));
        } else {
            if (!args[0]) return message.reply("PandaBot says please enter the amount of messages you wish to clear! 🐼");
            if (isNaN(args[0])) return message.reply("PandaBot says please enter a real number! 🐼");

            if (args[0] > 20) return message.reply("PandaBot says you cannot delete more than 20 messages at once! 🐼");
            if (args[0] < 1) return message.reply("PandaBot says you must delete at least one message! 🐼");

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
                message.channel.send(`PandaBot says ${args} messages have now been deleted! 🐼`)
                    .then(msg => msg.delete({ timeout: 1000 * 2 }))
            });
        }
    }
}



