module.exports = {
    name: 'ban',
    description: "this bans a user!",
    execute(client, message, args, Discord) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            (message.channel.send("PandaBot says you do not have permission to ban a member! 🐼"));
        } else {

            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) ;
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send(`PandaBot says <@${memberTarget.user.id}> has been banned! 🐼`);
            } else {
                message.channel.send(`PandaBot says you couldn't ban a member as none was specified! 🐼`);
            }
        }
    }
}
