const profileModel = require(`../../database/models/profileSchema`)

module.exports = async (Discord, client, message) => {
    const prefix = (process.env.PREFIX)
    if (!message.content.startsWith(prefix) || message.author.bot) return

    let profileData;
    try {
        profileData = await profileModel.findOne({ userID: message.author.id });
        if (!profileData) {
            let profile = await profileModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
                coins: 1000,
                bank: 0,
            });
            profile.save();
        }
    } catch (err) {
        console.log(err);
    }

    const args = message.content.slice(prefix.length).split(/\s+/)
    const cmd = args.shift().toLowerCase()

    const command = client.commands.get(cmd)

    if (command) command.execute(client, message, args, Discord, profileData)
    else {
        message.channel.send("PandaBot says there is no such command! <a:pietroOOF:796574084628217927>")
    }
}