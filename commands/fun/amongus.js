
module.exports = {
    name: 'amongus',
    aliases: ["eject", "impostor"],
    permissions: [],
    description: 'hahaha sussss sussy hahahah xd',

    async execute(client, message, cmd, args, Discord) {

        const ejop = [
            `${message.author.username} was the impostor!`,
            `${message.author.username} was not the impostor!`,
            `${message.author.username} has been ejected. 2 Impostors remain.`,
            `${message.author.username} has been ejected. 1 Impostor remains.`,
            `${message.author.username} has been ejected. 0 Impostors remain.`,
        ]

        const rau = Math.floor(Math.random() * ejop.length);
        
        await message.delete().then(() => {
            message.channel.send(ejop[rau]);
        })
    }
}