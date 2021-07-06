const profileModel = require(`../../database/models/profileSchema`)
const economy = require('../../database/economy')
const Discord = require("discord.js")

module.exports = {
    name: "blackjack",
    aliases: ["bj", "21"],
    permissions: [],
    description: "Plays blackjack against PandaBot for PandaCoins",
    async execute(client, message, args, Discord, profileData) {

        let user = message.author;
        let coins = parseInt(args[0]);
        let bjCoins = (coins * 2)
        let userId = user.id
        let guildId = message.guild.id
        let coindb = await economy.getCoins(userId)
       
        if (!coins || coins < 1 || isNaN(coins)) {
            message.channel.send("Please provide a vaild amount of PandaCoins to bet!")
            return
        }

        if (coins > coindb) {
            message.channel.send(`You do not have ${coins} PandaCoins to bet. Please check your balance and try again.`)
        }


        // ** BEGIN Javascript blackjack game from echohatch1. Modified for Grape.

        var numCardsPulled = 0;
        var gameOver = false;

        var player = {
            cards: [],
            score: 0
        };
        var dealer = {
            cards: [],
            score: 0
        };

        function getCardsValue(user) {
            var cardArray = [],
                sum = 0,
                i = 0,
                dk = 10.5,
                doubleking = "QQ",
                aceCount = 0;
            cardArray = user;
            for (i; i < cardArray.length; i += 1) {
                if (cardArray[i].rank === "J" || cardArray[i].rank === "Q" || cardArray[i].rank === "K") {
                    sum += 10;
                } else if (cardArray[i].rank === "A") {
                    sum += 11;
                    aceCount += 1;
                } else if (cardArray[i].rank === doubleking) {
                    sum += dk
                } else {
                    sum += cardArray[i].rank;
                }
            }
            while (aceCount > 0 && sum > 21) {
                sum -= 10;
                aceCount -= 1;
            }
            return sum;
        }

        var deck = {
            deckArray: [],
            initialize: function () {
                var suitArray, rankArray, s, r, n;
                suitArray = ["Clubs", "Diamonds", "Hearts", "Spades"];
                rankArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
                n = 13;
                for (s = 0; s < suitArray.length; s += 1) {
                    for (r = 0; r < rankArray.length; r += 1) {
                        this.deckArray[s * n + r] = {
                            rank: rankArray[r],
                            suit: suitArray[s]
                        };
                    }
                }
            },
            shuffle: function () {
                var temp, i, rnd;
                for (i = 0; i < this.deckArray.length; i += 1) {
                    rnd = Math.floor(Math.random() * this.deckArray.length);
                    temp = this.deckArray[i];
                    this.deckArray[i] = this.deckArray[rnd];
                    this.deckArray[rnd] = temp;
                }
            }
        };

        deck.initialize();
        deck.shuffle();

        async function bet(outcome) {
            if (outcome === "win") {
                economy.addCoins(guildId, userId, coins)
            }
            if (outcome === "bjWin") {
                economy.addCoins(guildId, userId, bjCoins)
            }
            if (outcome === "lose") {
                economy.rmvCoins(guildId, userId, coins)
            }
            if (outcome === "tie") {
                return
            }
        }

        function resetGame() {
            numCardsPulled = 0;
            player.cards = [];
            dealer.cards = [];
            player.score = 0;
            dealer.score = 0;
            deck.initialize();
        }

        function endMsg(title, msg, dealerC) {
            let cardsMsg = "";
            player.cards.forEach(function (card) {
                cardsMsg += "[`" + card.rank.toString();
                if (card.suit == "Hearts") cardsMsg += "♥"
                if (card.suit == "Diamonds") cardsMsg += "♦"
                if (card.suit == "Spades") cardsMsg += "♠"
                if (card.suit == "Clubs") cardsMsg += "♣"
                cardsMsg += "`](https://example.com) "
            });
            cardsMsg += " --> " + player.score.toString()

            let dealerMsg = "";
            if (!dealerC) {
                dealerMsg = "[`" + dealer.cards[0].rank.toString();
                if (dealer.cards[0].suit == "Hearts") dealerMsg += "♥"
                if (dealer.cards[0].suit == "Diamonds") dealerMsg += "♦"
                if (dealer.cards[0].suit == "Spades") dealerMsg += "♠"
                if (dealer.cards[0].suit == "Clubs") dealerMsg += "♣"
                dealerMsg += " ? ?`](https://dashcord.tech/)"
            } else {
                dealerMsg = "";
                dealer.cards.forEach(function (card) {
                    dealerMsg += "[`" + card.rank.toString();
                    if (card.suit == "Hearts") dealerMsg += "♥"
                    if (card.suit == "Diamonds") dealerMsg += "♦"
                    if (card.suit == "Spades") dealerMsg += "♠"
                    if (card.suit == "Clubs") dealerMsg += "♣"
                    dealerMsg += "`](https://dashcord.tech/) "
                });
                dealerMsg += " --> " + dealer.score.toString()
            }

            const gambleEmbed = new Discord.MessageEmbed()
                .setColor('#000001')
                .setTitle(user.username + `'s game table` + '\n___')
                .addField(user.username + 'Cards', cardsMsg)
                .addField('Dealer\'s Cards', dealerMsg)
                .addField(title, msg);

            message.channel.send(gambleEmbed);
        }

        async function endGame() {
            if (player.score === 21) {
                bet('bjWin');
                gameOver = true;
                await endMsg(`${user.username} has blackjack **${user.username} wins!!**`, `You have won ${bjCoins} PandaCoins! Congratulations!!`)
            }
            if (player.score > 21) {
                bet('lose');
                gameOver = true;
                await endMsg(`${user.username} busted; PandaBot wins, **${user.username} loses**.`,` You have lost ${coins} PandaCoins....Better luck next time....`)
            }
            if (dealer.score === 21) {
                bet('lose');
                gameOver = true;
                await endMsg(`PandaBot has blackjack; PandaBot wins, **${user.username} loses**.`,` You have lost ${coins} PandaCoins....Better luck next time....`)
            }
            if (dealer.score > 21) {
                bet('win');
                gameOver = true;
                await endMsg(`PandaBot busted; **${user.username} wins**!`,` You have won ${coins} PandaCoins! Congratulations!!`)
            }
            if (dealer.score >= 17 && player.score > dealer.score && player.score < 21) {
                bet('win');
                gameOver = true;
                await endMsg(`PandaBot stands with ${dealer.score}; **${user.username} wins**!`,` You have won ${coins} PandaCoins! Congratulations!!`)
            }
            if (dealer.score >= 17 && player.score < dealer.score && dealer.score < 21) {
                bet('lose');
                gameOver = true;
                await endMsg(`PandaBot stands with ${dealer.score}; PandaBot wins, **${user.username} loses**.`,` You have lost ${coins} PandaCoins....Better luck next time....`)
            }
            if (dealer.score >= 17 && player.score === dealer.score && dealer.score < 21) {
                gameOver = true;
                await endMsg(`PandaBot stands with ${dealer.score}; **It's a tie**.`,` ${coins} PandaCoins have been returned to your balance.`)
            }
        }

        async function createEmbedMessage(gambleEmbed, message) {
            const oldEmbed = await message.channel.messages.fetch(gambleEmbed)
            const sendEmbed = new MessageEmbed(oldEmbed).addField(user.username + 'Cards', cardsMsg).addField('Dealer\'s Cards', dealerMsg);

            let msg = await oldEmbed.edit(sendEmbed);
        }

        function dealerDraw() {

            dealer.cards.push(deck.deckArray[numCardsPulled]);
            dealer.score = getCardsValue(dealer.cards);
            numCardsPulled += 1;
            createEmbedMessage()
        }

        function newGame() {
            hit();
            hit();
            dealerDraw();
            endGame();
        }

        function hit() {
            player.cards.push(deck.deckArray[numCardsPulled]);
            player.score = getCardsValue(player.cards);
            createEmbedMessage()

            numCardsPulled += 1;
            if (numCardsPulled > 2) {
                endGame();
            }
        }

        function stand() {
            while (dealer.score < 17) {
                dealerDraw();
            }
            endGame();
        }
        // END Javascript blackjack game from echohatch1. Modified for Grape. **

        newGame();
        async function loop() {
            if (gameOver) return;

            endMsg("BJ", '*Send `h` to hit and `s` to stand** ', false)

            let filter = m => m.author.id === message.author.id;
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 1200000,
                errors: ['time']
            }).then(message => {
                message = message.first()
                console.log(message)
                if (message.content == "h" || message.content == "hit" || message.content == "H" || message.content == "Hit") {
                    hit();
                    loop();
                    return
                } else if (message.content == "s" || message.content == "stand" || message.content == "S" || message.content == "Stand") {
                    stand();
                    loop();
                    return
                } else {
                    bet("tie");
                    return
                }
            }).catch(_ => {
                message.channel.send(`**There has been an error. ${coins} PandaCoins have been returned to your balance.**`);
                bet("tie");
                return
            })
        }

        await loop()
    }
}
