const MessageModel = require('../../database/models/message');

module.exports = async (Discord, client, reaction, user) => {
  if (reaction.message.channel.id !== '779175178349182996') return;
    let addMemberRole = (emojiRoleMappings) => {
        if (emojiRoleMappings.hasOwnProperty(reaction.emoji.id)) {
            let roleId = emojiRoleMappings[reaction.emoji.id];
            let role = reaction.message.guild.roles.cache.get(roleId);
            let member = reaction.message.guild.members.cache.get(user.id);
            if (role && member) {
                member.roles.add(role);
            }
        }
    }
    console.log(reaction.constructor.name)
    if (reaction.message.partial) {
        await reaction.message.fetch();
        let { id } = reaction.message;
        try {
            let msgDocument = await MessageModel.findOne({ messageId: id });
            if (msgDocument) {
                client.cachedMessageReactions.set(id, msgDocument.emojiRoleMappings);
                let { emojiRoleMappings } = msgDocument;
                addMemberRole(emojiRoleMappings);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    else {
        let emojiRoleMappings = client.cachedMessageReactions.get(reaction.message.id);
        addMemberRole(emojiRoleMappings);
    }
}
