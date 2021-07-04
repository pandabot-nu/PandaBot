module.exports = {
    name: 'ban',
    description: "this bans a user!",
    execute(client, message, args, Discord) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            (message.channel.send("PandaBot says you do not have permission to ban a member! 🐼"));
        } else {

            const member = message.mentions.users.first();
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