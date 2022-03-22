const profileModel = require(`../../database/models/profileSchema`)
const economy = require('../../database/economy')
const Discord = require("discord.js")

module.exports = {
    name: "slots",
    aliases: [],
    permissions: [],
    usage: "[bet amount]",
    cooldown: 0,
    description: "Plays the slots for PandaCoins",
    async execute(client, message, args, Discord, profileData) {
      if (message.channel.id !== '868444993340182558')
        return;

        const a = client.emojis.cache.get("861803405945208892")
        const b = client.emojis.cache.get("779170895390310440")
        const c = client.emojis.cache.get("861806841985368096")
        const d = client.emojis.cache.get("861858550681436190")
        const e = client.emojis.cache.get("861806792597307413")
        const f = client.emojis.cache.get("861805933628620800")
        const g = client.emojis.cache.get("861806894967947284")
        const h = client.emojis.cache.get("780236085846343720")
        const i = client.emojis.cache.get("861856915671482368")
        const j = client.emojis.cache.get("812149865470885898")

        const slotOptions = [`${a}`, `${b}`, `${c}`, `${d}`, `${e}`, `${f}`, `${g}`, `${h}`, `${i}`, `${j}`];


        const slotOne = slotOptions[Math.floor(Math.random() * slotOptions.length)];
        const slotTwo = slotOptions[Math.floor(Math.random() * slotOptions.length)];
        const slotThree = slotOptions[Math.floor(Math.random() * slotOptions.length)];


        const coin = parseInt(args[0])
        const userId = message.author.id
        const guildId = message.guild.id
        const coindb = await economy.getCoins(guildId, userId)
        let thumb = ["https://i.imgur.com/Kkn7A8G.png", "https://i.imgur.com/OQo1xkQ.png"]
        let pic = thumb[Math.floor(Math.random() * thumb.length)]
        const user = message.author

        if (!coin || coin < 1) {
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

        if (coin > coindb) {
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();
                let cEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                    .setColor("RED")
                    .setDescription(`You do not have **${coin} PandaCoins** to bet. Please check your balance and try again.`)
                    .setThumbnail(`${pic}`)
                message.channel.send(cEmbed)
            })
            return
        }

        async function bet(outcome) {
            if (outcome === "win") {
                const winCoins = (coin * 5)
                let winEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle(":slot_machine: PandaBot Slots :slot_machine:")
                    .addField(`${slotOne} ${slotTwo} ${slotThree}`, `You have won **${winCoins} PandaCoins!** Congratulations!!`)
                    .setDescription(`**Results: SMALL WIN!**`)
                message.channel.send(winEmbed)
                economy.addCoins(guildId, userId, winCoins)
            }

            if (outcome === "jackpot") {
                const jackpotCoins = (coin * 250)
                let jackpotEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle(":slot_machine: PandaBot Slots :slot_machine:")
                    .addField(`${slotOne} ${slotTwo} ${slotThree}`, `You have won **${jackpotCoins} PandaCoins!** Congratulations!!`)
                    .setDescription(`**Results: JACKPOT!!**`)
                message.channel.send(jackpotEmbed)
                economy.addCoins(guildId, userId, jackpotCoins)
            }
            if (outcome === "lose") {
                let loseEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle(":slot_machine: PandaBot Slots :slot_machine:")
                    .addField(`${slotOne} ${slotTwo} ${slotThree}`, `You have lost **${coin} PandaCoins**....Better luck next time....`)
                    .setDescription(`**Results: LOSER!!**`)
                message.channel.send(loseEmbed)
                economy.rmvCoins(guildId, userId, coin)
            }
        }

        async function slotResults() {

            if (slotOne === slotTwo && slotOne !== slotThree || slotOne !== slotTwo && slotTwo === slotThree) {
                bet("win");
            }
            if (slotOne === slotTwo && slotOne === slotThree) {
                bet("jackpot");
            }
            if (slotOne !== slotTwo && slotTwo !== slotThree) {
                bet("lose")
            }
        }
        function slots() {
            slotResults()
        }

        slots()
    }

}
