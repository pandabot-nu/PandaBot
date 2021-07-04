const Discord = require("discord.js")
module.exports = {
  name: "em/add",
  async  execute(client, message, args) {
    if(!message.member.hasPermission('MANAGE_EMOJIS')) return
    
    const emojis = args
    if(!emojis.length){
      message.channel.send(`**Please specify the emoji that you want to add.**`)
      return ;
    }
    let names = []
    for (const emoji of emojis) {
      let info = Discord.Util.parseEmoji(emoji)
      if (!info.id) {
        continue;
      }
      let type = info.animated ? ".gif" : ".png"
      let url = `https://cdn.discordapp.com/emojis/${info.id + type}`
      var emj = await message.guild.emojis.create(url, info.name, {
        reason: `emoji created by ${client.user.tag}`
      })
      names.push(emj)
    }
    if(!names.length){
       message.channel.send("**PandaBot could not find a valid emoji to add.**");
       return;
    } else {
    message.channel.send(`Emote ${names.join("/")} successfully created.`)
    }
  }
}