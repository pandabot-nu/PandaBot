const words = require('../../utils/words.json');
const { stripIndents } = require('common-tags')
module.exports = {
    name: "hangman",
    aliases: ["hm"],
    usage: [],
    permissions: [],
    description: "Plays a game of hangman with Animal Crossing words",

    async execute(client, message, args, Discord) {
        const word = words[Math.floor(Math.random() * words.length)].toLowerCase();
        let points = 0;
        let displayText = null;
        let guessed = false;
        const confirmation = [];
        const incorrect = [];
        const display = new Array(word.length).fill('_');
        while (word.length !== confirmation.length && points < 7) {
            await message.channel.send(stripIndents`
                ${displayText === null ? '**Here we go!**' : displayText ? '**Good job!**' : '**Nope!**'}
                \`${display.join(' ')}\`. **Which letter do you choose**?
                **Incorrect Tries:** ${incorrect.join(', ') || '**None**'}
                \`\`\`
                ___________
                |     ${points > 0 ? '|' : ''}
                |     ${points > 1 ? 'O' : ''}
                |    ${points > 3 ? '—' : ' '}${points > 2 ? '|' : ''}${points > 4 ? '—' : ''}
                |    ${points > 5 ? '/' : ''} ${points > 6 ? '\\' : ''}
                ===========
                \`\`\`
            `);
            const filter = res => {
                const choice = res.content.toLowerCase();
                return !confirmation.includes(choice) && !incorrect.includes(choice);
            };
            const guess = await message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000
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
            return message.channel.send(stripIndents`
                **You won, it was ${word}!**`);
        }
        return message.channel.send(stripIndents`
            **Too bad... It was ${word}**...*Dumbass*...<a:bearlaughing:827654744642289716>`);

    }
}
