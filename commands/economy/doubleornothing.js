const profileModel = require('../../database/models/profileSchema')
const economy = require('../../database/economy')
module.exports = {
  name: "doubleornothing",
  aliases: ["double", "don"],
  permissions: [],
  cooldown: 0,
  usage: "[bet amount]",
  description: "Gambles PandaCoins to double your bet",

  async execute(client, message, args, Discord, cmd) {
    if (message.channel.id !== '868444993340182558')
        return;
    const guildId = message.guild.id
    const user = message.author
    const userId = user.id
    const coindb = await economy.getCoins(guildId, userId)
    let thumb = ["https://i.imgur.com/Kkn7A8G.png", "https://i.imgur.com/OQo1xkQ.png"]
    let pic = thumb[Math.floor(Math.random() * thumb.length)]

    if (!args[0] || isNaN(args[0])) {
      let url = client.users.fetch(userId);
      url.then(function (targetURL) {
        var imgURL = targetURL.displayAvatarURL();
        let fEmbed = new Discord.MessageEmbed()
          .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
          .setColor("RED")
          .setDescription('Please provide a vaild amount of PandaCoins to bet!')
          .setThumbnail(`${pic}`)
        message.channel.send(fEmbed)
      })
      return
    }

    const bet = parseInt(args[0]);
    if (bet > coindb) {
      let url = client.users.fetch(userId);
      url.then(function (targetURL) {
        var imgURL = targetURL.displayAvatarURL();
        let cEmbed = new Discord.MessageEmbed()
          .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
          .setColor("RED")
          .setDescription(`You do not have ${coins} PandaCoins to bet. Please check your balance and try again.`)
          .setThumbnail(`${pic}`)
        message.channel.send(cEmbed)
      })
      return
    }


    function random() {
      const num = Math.floor(Math.random() * 2);
      return num === 1;
    };

    if (random() === true) {
      const coins = bet * 2;
      let url = client.users.fetch(userId);
      url.then(function (targetURL) {
        var imgURL = targetURL.displayAvatarURL();

        let winEmbed = new Discord.MessageEmbed()
          .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
          .setDescription(`Yay! Double!! You have won **${coins} PandaCoins!** Congratulations!!`)
          .setThumbnail("https://i.imgur.com/dUoJGTf.png")
          .setColor("RANDOM")
        message.channel.send(winEmbed)
        economy.addCoins(guildId, userId, coins);
      })
    }
    else {
      let url = client.users.fetch(userId);
      url.then(function (targetURL) {
        var imgURL = targetURL.displayAvatarURL();

        let loseEmbed = new Discord.MessageEmbed()
          .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
          .setDescription(`Oof, Nothing....You have lost **${bet} PandaCoins**....Better luck next time....`)
          .setThumbnail("https://i.imgur.com/q8exlJR.gif")
          .setColor("RANDOM")
        message.channel.send(loseEmbed)
        economy.rmvCoins(guildId, userId, bet);
      })
    }

  }
}
