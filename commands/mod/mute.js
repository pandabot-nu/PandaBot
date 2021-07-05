const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "this mutes a user!",
    execute(client, message, args, Discord) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            (message.channel.send("PandaBot says you do not have permission to mute a member! 🐼"));
        } else {
            const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) ;
            if (target) {

                let mainRole = message.guild.roles.cache.find(role => role.name === 'Freshmen Nooklings');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                if (!args[1]) {
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`PandaBot says that <@${memberTarget.user.id}> has been muted! 🐼`);
                    return
                }
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`PandaBot says that <@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}! 🐼`);

                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                }, ms(args[1]));
            } else {
                message.channel.send("PandaBot says you couldn't mute a member as none was specified! 🐼");
            }
        }
    }
}
