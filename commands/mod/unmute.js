module.exports = {
    name: 'unmute',
    description: "this unmutes a user!",
    execute(client, message, args, Discord) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            (message.channel.send("PandaBot says you do not have permission to unmute a member! 🐼"));
        } else {
            const target = message.mentions.users.first();
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Freshmen Nooklings');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`PandaBot says that <@${memberTarget.user.id}> has been unmuted! 🐼`);
            } else {
                message.channel.send("PandaBot says you couldn't mute a member as none was specified! 🐼");
            }
        }
    }
}