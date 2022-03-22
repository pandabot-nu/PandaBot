const economy = require('../../database/economy')
const profileModel = require(`../../database/models/profileSchema`)

module.exports = {
    name: "work", 
    aliases: [],
    permissions: [],
    cooldown: 60000 * 60 * 2,
    description: "Works with an NPC to earn PandaCoins.",
    async execute(client, message, args, Discord, profileData) {
      
      const jobs = [
        "<:wisp:861807244906463262> Wisp <:wisp:861807244906463262>", 
        "<:acceleste2:812149865470885898> Celeste <:acceleste2:812149865470885898>", 
        "<:Blathers:861805933628620800> Blathers <:Blathers:861805933628620800>", 
        "<:tomnook:861806474816782336> Tom Nook <:tomnook:861806474816782336>", 
        "<:Isabelle:861856915671482368> Isabelle <:Isabelle:861856915671482368> ", 
        "<:accj:779170895390310440> C.J <:accj:779170895390310440>", 
        "<:acflick:780236085846343720> Flick <:acflick:780236085846343720>", 
        "<:mabel:861806792597307413> Mable <:mabel:861806792597307413>", 
        "<:sable:861806841985368096>  Sable <:sable:861806841985368096> ", 
        "<:label:861806894967947284> Label <:label:861806894967947284>", 
        "<:timmy:861806176298860564>  Timmy <:timmy:861806176298860564> ",
        "<:tommy:861806218339024918> Tommy <:tommy:861806218339024918>", 
        "<:kk:861803405945208892>  K.K Slider <:kk:861803405945208892> ", 
        "<:acsaharah:780236085032779816> Sahara <:acsaharah:780236085032779816>", 
        "<:daisymae:861808185466421268> Daisy Mae <:daisymae:861808185466421268>", 
        "<:leif:798762001454465054> Leif <:leif:798762001454465054>", 
        "<:acredd:798456301720961054> Redd <:acredd:798456301720961054>"]
      const jobIndex = Math.floor(Math.random() * jobs.length);
      const coins = Math.floor(Math.random() * (500-200)) + 200;
      const user = message.author
      const guildId = message.guild.id
      const userId = user.id
      
      let url = client.users.fetch(userId);
      url.then(function(targetURL) {
        var imgURL = targetURL.displayAvatarURL();

      let workEmbed = new Discord.MessageEmbed()
      .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
      .setDescription(`You worked with **${jobs[jobIndex]}** and earned **${coins} PandaCoins!**`)
      .setThumbnail("https://i.imgur.com/Ao2arsD.png")
      .setColor("RANDOM")
      return message.channel.send(workEmbed)
  })
      
      await economy.addCoins(guildId, userId, coins);
    }
   }
