const { MessageEmbed } = require('discord.js')
const moment = require('moment') // npm i moment
moment.locale('en-au')

module.exports ={
  name: "userinfo",
    aliases: ["ui", "useri", "uinfo"],
    permissions: ["ADMINISTRATOR"],
    description: 'Shows User Info About A User or Pinged User', // Optional
 execute(client, message, args, Discord) {

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) ||  message.member
        console.log(member)
        // For Status Of User, We Will Use Emoji To Look Nice
        const permissions = member.permissions
        if(member.bot === true){
          var memberBot= "Yes"
        } else {
          var memberBot = "No"
        }
        
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`User Info Of ${member.user.username}`, member.user.displayAvatarURL())
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .addField('**Username**', `${member.user.username}#${member.user.discriminator}`, true) 
        .addField('**User ID**', ` ${member.id} `, true)
        .addField('**User Roles**', `${member.roles.cache.map(role => role.toString())}`)
        .addField('**Nickname**', ` ${member.displayName} `,true)
        .addField('**Is a Bot**',  ` ${memberBot} `, true)
        .addField('**Account Created (UTC)**', ` ${moment.utc(member.user.createdAt).format('LLLL')} `)
        .addField('**Joined Server (UTC)**', ` ${moment.utc(member.joinedAt).format('LLLL')} `)
               
        
        // Add More Fields If Want
        message.channel.send(embed)
    }
}
