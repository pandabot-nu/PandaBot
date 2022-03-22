const words = require('../../utils/missMWords.json');
const { stripIndents } = require('common-tags')
module.exports = {
  name: "missmman",
  aliases: ["mmm"],
  usage: [],
  permissions: [],
  cooldown: 0,
  description: "Plays a game of hangman with chemistry elements words",

  async execute(client, message, args, Discord) {
    const word = words[Math.floor(Math.random() * words.length)].toLowerCase();
    let points = 0;
    let displayText = null;
    let guessed = false;
    const confirmation = [];
    const incorrect = [];
    const display = new Array(word.length).fill('**_** ');
    const user = message.author
    const userId = user.id
    const space = "```"
    while (word.length !== confirmation.length && points < 7) {

      const hangmanEmbed = new Discord.MessageEmbed()
        .setTitle(`${displayText === null ? '**Here we go!**' : displayText ? '**Good job!**' : '**Nope!**'}`)
        .setColor("RANDOM").setDescription(`${display.join(' ')} **Which letter do you choose**?\n
                **Incorrect Tries:** ${incorrect.join(', ') || '**None**'}`)
        .addField(`\u200B`, stripIndents`${space}
                 ___________
                |     ${points > 0 ? '|' : ''}
                |     ${points > 1 ? 'O' : ''}
                |    ${points > 3 ? '—' : ' '}${points > 2 ? '|' : ''}${points > 4 ? '—' : ''}
                |    ${points > 5 ? '/' : ''} ${points > 6 ? '\\' : ''}
                ===========${space}`);
      await message.channel.send(hangmanEmbed)
      const filter = res => {
        const choice = res.content.toLowerCase();
        return !confirmation.includes(choice) && !incorrect.includes(choice);
      };
      const guess = await message.channel.awaitMessages(filter, {
        max: 1,
        time: 300000
      });
      if (!guess.size) {
        await message.channel.send('**Sorry, time is up!**');
        break;
      }
      const choice = guess.first().content.toLowerCase();
      if (choice === 'end') break;
      if (choice.length > 1 && choice === word) {
        guessed = true;
        break;
      } else if (word.includes(choice)) {
        displayText = true;
        for (let i = 0; i < word.length; i++) {
          if (word.charAt(i) !== choice) continue; // eslint-disable-line max-depth
          confirmation.push(word.charAt(i));
          display[i] = word.charAt(i);
        }
      } else {
        displayText = false;
        if (choice.length === 1) incorrect.push(choice);
        points++;
      }
    }

    if (word.length === confirmation.length || guessed) {
      let url = client.users.fetch(userId);
      url.then(function(targetURL) {
        var imgURL = targetURL.displayAvatarURL();

        let winEmbed = new Discord.MessageEmbed()
          .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
          .setDescription(`**You won, it was ${word}!**`)
          .setThumbnail("https://i.imgur.com/dUoJGTf.png")
          .setColor("RANDOM")
        message.channel.send(winEmbed);
        return
      })
    } else {

      let url = client.users.fetch(userId);
      url.then(function(targetURL) {
        var imgURL = targetURL.displayAvatarURL();

        let loseEmbed = new Discord.MessageEmbed()
          .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
          .setDescription(`**Too bad... It was ${word}**...<a:bearlaughing:827654744642289716>`)
          .setThumbnail("https://i.imgur.com/q8exlJR.gif")
          .setColor("RANDOM")
        message.channel.send(loseEmbed); return
      })
    }
  }
}
