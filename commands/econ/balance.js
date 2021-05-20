module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions: [],
    description: "Checks the user balance",
    execute(client, message, args, Discord, profileData) {
      message.channel.send(message.member.user +`'s Balance\n\n` + `Coins: ${profileData.coins} \n\n` + `Bank: ${profileData.bank}`);
    },
  };
  