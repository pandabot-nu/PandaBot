require('dotenv').config();
const cooldown = require('../../database/models/cooldown')
const Levels = require('discord-xp');


module.exports = async (Discord, client, message) => {
    const user = await Levels.fetch(message.author.id, message.guild.id)
    if(message.author.bot) return
    if (!user) { Levels.createUser(message.author.id, message.guild.id) }
    if (Date.now() - user.lastUpdated > 60000) {
        const randomAmountOfXp = Math.floor(Math.random() * 29) + 1; // Min 1, Max 30
        const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);
        if (hasLeveledUp) {


            //  message.channel.send(`${message.author}, congratulations! You have leveled up to **${user.level}**. :tada:`);
        }
    }

    const prefix = (process.env.PREFIX)

    if (!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/\s+/)
    const cmd = args.shift().toLowerCase()

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd))

    async function commandExecute() {
        if (!message.member.permissions.has(command.permissions || [])) return message.channel.send(`PandaBot says you do not have permission to use this command!`)
        if (command) command.execute(client, message, args, Discord, cmd)
    }
    if (command.cooldown) {
        const current_time = Date.now();
        const cooldown_amount = (command.cooldown)

        cooldown.findOne({ userId: message.author.id, cmd: command.name }, async (err, data) => {
            let thumb = ["https://i.imgur.com/Kkn7A8G.png", "https://i.imgur.com/OQo1xkQ.png"]
            let pic = thumb[Math.floor(Math.random() * thumb.length)]
            if (data) {
                const expiration_time = data.time + cooldown_amount;

                if (current_time < expiration_time) {
                    const time_left = (expiration_time - current_time) / 1000

                    if (time_left.toFixed(1) >= 3600) {
                        let hour = (time_left.toFixed(1) / 3600);
                        let hEmbed = new Discord.MessageEmbed()
                        .setColor("RED")
                            .setDescription(`**Please wait ${parseInt(hour)} more hours before using** ***${command.name}!***`)
                            .setThumbnail(`${pic}`)
                        message.channel.send(hEmbed); return
                    }
                    if (time_left.toFixed(1) >= 60) {
                        let minute = (time_left.toFixed(1) / 60);
                        let mEmbed = new Discord.MessageEmbed()
                        .setColor("RED")
                            .setDescription(`**Please wait ${parseInt(minute)} more minutes before using** ***${command.name}!***`)
                            .setThumbnail(`${pic}`)
                        message.channel.send(mEmbed); return

                    }
                    let seconds = (time_left.toFixed(1));
                    let sEmbed = new Discord.MessageEmbed()
                       .setColor("RED")
                        .setDescription(`**Please wait ${parseInt(seconds)} more seconds before using** ***${command.name}!***`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(sEmbed); return

                } else {
                    await cooldown.findOneAndUpdate({ userId: message.author.id, cmd: command.name }, { time: current_time });
                    commandExecute();
                }
            } else {
                commandExecute();
                new cooldown({
                    userId: message.author.id,
                    cmd: command.name,
                    time: current_time,
                    cooldown: command.cooldown,
                }).save();
            }
        })
    } else {
        commandExecute();
    }

}

