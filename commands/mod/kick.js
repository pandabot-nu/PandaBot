module.exports = {
    name: 'kick',
    description: "this kicks a user!",
    execute(client, message, args, Discord) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            (message.channel.send("PandaBot says you do not have permission to kick a member! 🐼"));
        } else {
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) 
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send(`PandaBot says <@${memberTarget.user.id}> has been kicked! 🐼`);
            } else {
                message.channel.send(`PandaBot says you couldn't kick a member as none was specified!! 🐼`);
            }
        }
    }
}
