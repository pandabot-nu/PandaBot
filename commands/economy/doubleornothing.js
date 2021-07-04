const profileModel = require('../../database/models/profileSchema')
const economy = require('../../database/economy')
module.exports = {
    name: "doubleornothing",
    aliases: ["double", "don"],
    permissions: [],
    description: "Gambles to double your bet",
   
    async execute(client, message, args, Discord, cmd) {
      const guildId = message.guild.id
      const userId = message.author.id
      
      if(!args[0]) return message.reply("Please specify an amount to bet!")
      if(isNaN(args[0])) return message.reply("Your bet must be a number amount!")

      const bet = parseInt(args[0]);
      if(await economy.getCoins(message.author.id) < bet) return message.reply(`You do not have ${bet} coins to bet. Please check your balance and try again.`)

      function random() {
        const num = Math.floor(Math.random() * 2);
        return num === 1;
      };

      if(random() === true) {
        const coins = bet * 2;
        message.channel.send(`You have won ${coins} coins! Congratulations!!`); 
        economy.addCoins(guildId, userId, coins)
             }else {
               message.channel.send(`You have lost ${bet} coins....Better luck next time....`);
               economy.rmvCoins(guildId, userId, bet)
             }

    }
}