const prefix = (process.env.PREFIX);
const Levels = require('discord-xp');
const economy = require('../../database/economy')

module.exports = async (Discord, client, member) => {
const channel = member.guild.channels.cache.find(channel => channel.name === "dropouts");

    if(!channel) return;

    const leavesEmbed = new Discord.MessageEmbed()
	.setColor('#594033')
	.setTitle('Bye Felica')
	.setDescription(member.displayName +` has left ${member.guild.name} - fuck off ya cunt <a:marshallclean:786077939703873547>`);

channel.send(leavesEmbed);
   
    }
