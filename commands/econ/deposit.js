const profileModel = require(`../../database/models/profileSchema`)
module.exports = {
  name: "deposit",
  aliases: ["dep"],
  permissions: [],
  description: "Deposit coins into your bank!",
  async execute(client, message, args, Discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("PandaBot says the deposit amount must be a whole number!");
    try {
      if (amount > profileData.coins) return message.channel.send(`PandaBot says You don't have that amount of coins to deposit`);
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: -amount,
            bank: amount,
          },
        }
      );

      return message.channel.send(`PandaBot says you deposited ${amount} of coins into your bank`);
    } catch (err) {
      console.log(err);
    }
  },
};
