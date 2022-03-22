const inventoryModel = require("../../database/models/inventory")
const items = require("../../utils/shopitems")
const economy = require('../../database/economy')

module.exports = {
    name: "buy",
    aliases: [],
    permissions: [],
    usage: ["[item]"],
    cooldown: 0,
    description: "buys an item from the shop",

    async execute(client, message, args, Discord, profileData) {
    

        const user = message.author
        const userId = user.id
        const guildId = message.guild.id
        const coindb = await economy.getCoins(guildId, userId)
        const buy = args.join(" ").toString()
        const purchase = buy.toLowerCase()
        let thumb = ["https://i.imgur.com/Kkn7A8G.png", "https://i.imgur.com/OQo1xkQ.png"]
        let pic = thumb[Math.floor(Math.random() * thumb.length)]
        const prefix = process.env.PREFIX

        if (!args) {
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();
                let cEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                    .setColor("RED")
                    .setDescription("Please specify an item to purchase.")
                    .setThumbnail(`${pic}`)
                message.channel.send(cEmbed)
            })
            return
        }

        if (purchase === "1") {
            const purchase = "5 furniture/clothing items"

            const valid = !!items.find((val) => val.item.toLowerCase() === purchase)
            if (!valid) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let cEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`Please name a product from the shop!`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(cEmbed)
                })
                return
            }

            const itemPrice = items.find((val) => (val.item.toLowerCase()) === purchase).price

            if (coindb < itemPrice) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let fEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`You only have ${coindb} PandaCoins, the price of ${purchase} is ${itemPrice} PandaCoins`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(fEmbed)
                })
                return
            }

            const params = {
                guildId,
                userId
            }

            inventoryModel.findOne(params, async (err, data) => {

                if (data) {

                    const hasItem = Object.keys(data.inventory).includes(purchase)
                    if (!hasItem) {
                        data.inventory[purchase] = 1
                    } else {
                        data.inventory[purchase]++
                    }
                    console.log(data)
                    await inventoryModel.findOneAndUpdate(params, data)

                } else {
                    new inventoryModel({
                        guildId,
                        userId,
                        inventory: {
                            [purchase]: 1,
                        },
                    }).save()
                }
            })
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();

                let dEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                    .setColor("GREEN")
                    .setDescription(`You have bought ${purchase}. Please type \`${prefix}use ${purchase}\` to use the product. If there is a role attached to it, you will be given the role.`)
                    .setThumbnail(`https://i.imgur.com/dUoJGTf.png`)
                message.channel.send(dEmbed)
            })
            await economy.rmvCoins(guildId, userId, itemPrice)
        }
        if (purchase === "2") {
            const purchase = "10 furniture/clothing items"

            const valid = !!items.find((val) => val.item.toLowerCase() === purchase)
            if (!valid) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let cEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`Please name a product from the shop!`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(cEmbed)
                })
                return
            }

            const itemPrice = items.find((val) => (val.item.toLowerCase()) === purchase).price

            if (coindb < itemPrice) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let fEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`You only have ${coindb} PandaCoins, the price of ${purchase} is ${itemPrice} PandaCoins`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(fEmbed)
                })
                return
            }

            const params = {
                guildId,
                userId
            }

            inventoryModel.findOne(params, async (err, data) => {

                if (data) {

                    const hasItem = Object.keys(data.inventory).includes(purchase)
                    if (!hasItem) {
                        data.inventory[purchase] = 1
                    } else {
                        data.inventory[purchase]++
                    }
                    console.log(data)
                    await inventoryModel.findOneAndUpdate(params, data)

                } else {
                    new inventoryModel({
                        guildId,
                        userId,
                        inventory: {
                            [purchase]: 1,
                        },
                    }).save()
                }
            })
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();

                let dEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                    .setColor("GREEN")
                    .setDescription(`You have bought ${purchase}. Please type \`${prefix}use ${purchase}\` to use the product. If there is a role attached to it, you will be given the role.`)
                    .setThumbnail(`https://i.imgur.com/dUoJGTf.png`)
                message.channel.send(dEmbed)
            })
            await economy.rmvCoins(guildId, userId, itemPrice)
        }
        if (purchase === "3") {
            const purchase = "20 furniture/clothing items"

            const valid = !!items.find((val) => val.item.toLowerCase() === purchase)
            if (!valid) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let cEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`Please name a product from the shop!`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(cEmbed)
                })
                return
            }

            const itemPrice = items.find((val) => (val.item.toLowerCase()) === purchase).price

            if (coindb < itemPrice) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let fEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`You only have ${coindb} PandaCoins, the price of ${purchase} is ${itemPrice} PandaCoins`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(fEmbed)
                })
                return
            }

            const params = {
                guildId,
                userId
            }

            inventoryModel.findOne(params, async (err, data) => {

                if (data) {

                    const hasItem = Object.keys(data.inventory).includes(purchase)
                    if (!hasItem) {
                        data.inventory[purchase] = 1
                    } else {
                        data.inventory[purchase]++
                    }
                    console.log(data)
                    await inventoryModel.findOneAndUpdate(params, data)

                } else {
                    new inventoryModel({
                        guildId,
                        userId,
                        inventory: {
                            [purchase]: 1,
                        },
                    }).save()
                }
            })
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();

                let dEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                    .setColor("GREEN")
                    .setDescription(`You have bought ${purchase}. Please type \`${prefix}use ${purchase}\` to use the product. If there is a role attached to it, you will be given the role.`)
                    .setThumbnail(`https://i.imgur.com/dUoJGTf.png`)
                message.channel.send(dEmbed)
            })
            await economy.rmvCoins(guildId, userId, itemPrice)
        }
        if (purchase === "4") {
            const purchase = "100 nmt"

            const valid = !!items.find((val) => val.item.toLowerCase() === purchase)
            if (!valid) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let cEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`Please name a product from the shop!`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(cEmbed)
                })
                return
            }

            const itemPrice = items.find((val) => (val.item.toLowerCase()) === purchase).price

            if (coindb < itemPrice) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let fEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`You only have ${coindb} PandaCoins, the price of ${purchase} is ${itemPrice} PandaCoins`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(fEmbed)
                })
                return
            }

            const params = {
                guildId,
                userId
            }

            inventoryModel.findOne(params, async (err, data) => {

                if (data) {

                    const hasItem = Object.keys(data.inventory).includes(purchase)
                    if (!hasItem) {
                        data.inventory[purchase] = 1
                    } else {
                        data.inventory[purchase]++
                    }
                    console.log(data)
                    await inventoryModel.findOneAndUpdate(params, data)

                } else {
                    new inventoryModel({
                        guildId,
                        userId,
                        inventory: {
                            [purchase]: 1,
                        },
                    }).save()
                }
            })
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();

                let dEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                    .setColor("GREEN")
                    .setDescription(`You have bought ${purchase}. Please type \`${prefix}use ${purchase}\` to use the product. If there is a role attached to it, you will be given the role.`)
                    .setThumbnail(`https://i.imgur.com/dUoJGTf.png`)
                message.channel.send(dEmbed)
            })
            await economy.rmvCoins(guildId, userId, itemPrice)
        }
        if (purchase === "5") {
            const purchase = "half an inventory of materials"

            const valid = !!items.find((val) => val.item.toLowerCase() === purchase)
            if (!valid) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let cEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`Please name a product from the shop!`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(cEmbed)
                })
                return
            }

            const itemPrice = items.find((val) => (val.item.toLowerCase()) === purchase).price

            if (coindb < itemPrice) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let fEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`You only have ${coindb} PandaCoins, the price of ${purchase} is ${itemPrice} PandaCoins`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(fEmbed)
                })
                return
            }

            const params = {
                guildId,
                userId
            }

            inventoryModel.findOne(params, async (err, data) => {

                if (data) {

                    const hasItem = Object.keys(data.inventory).includes(purchase)
                    if (!hasItem) {
                        data.inventory[purchase] = 1
                    } else {
                        data.inventory[purchase]++
                    }
                    console.log(data)
                    await inventoryModel.findOneAndUpdate(params, data)

                } else {
                    new inventoryModel({
                        guildId,
                        userId,
                        inventory: {
                            [purchase]: 1,
                        },
                    }).save()
                }
            })
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();

                let dEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                    .setColor("GREEN")
                    .setDescription(`You have bought ${purchase}. Please type \`${prefix}use ${purchase}\` to use the product. If there is a role attached to it, you will be given the role.`)
                    .setThumbnail(`https://i.imgur.com/dUoJGTf.png`)
                message.channel.send(dEmbed)
            })
            await economy.rmvCoins(guildId, userId, itemPrice)
        }
        if (purchase === "6") {
            const purchase = "diy set (non-seasonal)"

            const valid = !!items.find((val) => val.item.toLowerCase() === purchase)
            if (!valid) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let cEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`Please name a product from the shop!`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(cEmbed)
                })
                return
            }

            const itemPrice = items.find((val) => (val.item.toLowerCase()) === purchase).price

            if (coindb < itemPrice) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let fEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`You only have ${coindb} PandaCoins, the price of ${purchase} is ${itemPrice} PandaCoins`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(fEmbed)
                })
                return
            }

            const params = {
                guildId,
                userId
            }

            inventoryModel.findOne(params, async (err, data) => {

                if (data) {

                    const hasItem = Object.keys(data.inventory).includes(purchase)
                    if (!hasItem) {
                        data.inventory[purchase] = 1
                    } else {
                        data.inventory[purchase]++
                    }
                    console.log(data)
                    await inventoryModel.findOneAndUpdate(params, data)

                } else {
                    new inventoryModel({
                        guildId,
                        userId,
                        inventory: {
                            [purchase]: 1,
                        },
                    }).save()
                }
            })
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();

                let dEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                    .setColor("GREEN")
                    .setDescription(`You have bought ${purchase}. Please type \`${prefix}use ${purchase}\` to use the product. If there is a role attached to it, you will be given the role.`)
                    .setThumbnail(`https://i.imgur.com/dUoJGTf.png`)
                message.channel.send(dEmbed)
            })
            await economy.rmvCoins(guildId, userId, itemPrice)
        }
        if (purchase === "7") {
            const purchase = "inventory of materials"

            const valid = !!items.find((val) => val.item.toLowerCase() === purchase)
            if (!valid) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let cEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`Please name a product from the shop!`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(cEmbed)
                })
                return
            }

            const itemPrice = items.find((val) => (val.item.toLowerCase()) === purchase).price

            if (coindb < itemPrice) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let fEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`You only have ${coindb} PandaCoins, the price of ${purchase} is ${itemPrice} PandaCoins`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(fEmbed)
                })
                return
            }

            const params = {
                guildId,
                userId
            }

            inventoryModel.findOne(params, async (err, data) => {

                if (data) {

                    const hasItem = Object.keys(data.inventory).includes(purchase)
                    if (!hasItem) {
                        data.inventory[purchase] = 1
                    } else {
                        data.inventory[purchase]++
                    }
                    console.log(data)
                    await inventoryModel.findOneAndUpdate(params, data)

                } else {
                    new inventoryModel({
                        guildId,
                        userId,
                        inventory: {
                            [purchase]: 1,
                        },
                    }).save()
                }
            })
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();

                let dEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                    .setColor("GREEN")
                    .setDescription(`You have bought ${purchase}. Please type \`${prefix}use ${purchase}\` to use the product. If there is a role attached to it, you will be given the role.`)
                    .setThumbnail(`https://i.imgur.com/dUoJGTf.png`)
                message.channel.send(dEmbed)
            })
            await economy.rmvCoins(guildId, userId, itemPrice)
        }
        if (purchase === "8") {
            const purchase = "diy set (seasonal)"

            const valid = !!items.find((val) => val.item.toLowerCase() === purchase)
            if (!valid) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let cEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`Please name a product from the shop!`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(cEmbed)
                })
                return
            }

            const itemPrice = items.find((val) => (val.item.toLowerCase()) === purchase).price

            if (coindb < itemPrice) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let fEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`You only have ${coindb} PandaCoins, the price of ${purchase} is ${itemPrice} PandaCoins`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(fEmbed)
                })
                return
            }

            const params = {
                guildId,
                userId
            }

            inventoryModel.findOne(params, async (err, data) => {

                if (data) {

                    const hasItem = Object.keys(data.inventory).includes(purchase)
                    if (!hasItem) {
                        data.inventory[purchase] = 1
                    } else {
                        data.inventory[purchase]++
                    }
                    console.log(data)
                    await inventoryModel.findOneAndUpdate(params, data)

                } else {
                    new inventoryModel({
                        guildId,
                        userId,
                        inventory: {
                            [purchase]: 1,
                        },
                    }).save()
                }
            })
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();

                let dEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                    .setColor("GREEN")
                    .setDescription(`You have bought ${purchase}. Please type \`${prefix}use ${purchase}\` to use the product. If there is a role attached to it, you will be given the role.`)
                    .setThumbnail(`https://i.imgur.com/dUoJGTf.png`)
                message.channel.send(dEmbed)
            })
            await economy.rmvCoins(guildId, userId, itemPrice)
        }
        if (purchase === "9") {
            const purchase = "400 nmt"

            const valid = !!items.find((val) => val.item.toLowerCase() === purchase)
            if (!valid) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let cEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`Please name a product from the shop!`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(cEmbed)
                })
                return
            }

            const itemPrice = items.find((val) => (val.item.toLowerCase()) === purchase).price

            if (coindb < itemPrice) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let fEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`You only have ${coindb} PandaCoins, the price of ${purchase} is ${itemPrice} PandaCoins`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(fEmbed)
                })
                return
            }

            const params = {
                guildId,
                userId
            }

            inventoryModel.findOne(params, async (err, data) => {

                if (data) {

                    const hasItem = Object.keys(data.inventory).includes(purchase)
                    if (!hasItem) {
                        data.inventory[purchase] = 1
                    } else {
                        data.inventory[purchase]++
                    }
                    console.log(data)
                    await inventoryModel.findOneAndUpdate(params, data)

                } else {
                    new inventoryModel({
                        guildId,
                        userId,
                        inventory: {
                            [purchase]: 1,
                        },
                    }).save()
                }
            })
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();

                let dEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                    .setColor("GREEN")
                    .setDescription(`You have bought ${purchase}. Please type \`${prefix}use ${purchase}\` to use the product. If there is a role attached to it, you will be given the role.`)
                    .setThumbnail(`https://i.imgur.com/dUoJGTf.png`)
                message.channel.send(dEmbed)
            })
            await economy.rmvCoins(guildId, userId, itemPrice)
        }
        if (purchase === "10") {
            const purchase = "4 million bells"

            const valid = !!items.find((val) => val.item.toLowerCase() === purchase)
            if (!valid) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let cEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`Please name a product from the shop!`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(cEmbed)
                })
                return
            }

            const itemPrice = items.find((val) => (val.item.toLowerCase()) === purchase).price

            if (coindb < itemPrice) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let fEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`You only have ${coindb} PandaCoins, the price of ${purchase} is ${itemPrice} PandaCoins`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(fEmbed)
                })
                return
            }

            const params = {
                guildId,
                userId
            }

            inventoryModel.findOne(params, async (err, data) => {

                if (data) {

                    const hasItem = Object.keys(data.inventory).includes(purchase)
                    if (!hasItem) {
                        data.inventory[purchase] = 1
                    } else {
                        data.inventory[purchase]++
                    }
                    console.log(data)
                    await inventoryModel.findOneAndUpdate(params, data)

                } else {
                    new inventoryModel({
                        guildId,
                        userId,
                        inventory: {
                            [purchase]: 1,
                        },
                    }).save()
                }
            })
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();

                let dEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                    .setColor("GREEN")
                    .setDescription(`You have bought ${purchase}. Please type \`${prefix}use ${purchase}\` to use the product. If there is a role attached to it, you will be given the role.`)
                    .setThumbnail(`https://i.imgur.com/dUoJGTf.png`)
                message.channel.send(dEmbed)
            })
            await economy.rmvCoins(guildId, userId, itemPrice)
        }
        if (purchase === "11") {
            const purchase = "diy set + materials"

            const valid = !!items.find((val) => val.item.toLowerCase() === purchase)
            if (!valid) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let cEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`Please name a product from the shop!`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(cEmbed)
                })
                return
            }

            const itemPrice = items.find((val) => (val.item.toLowerCase()) === purchase).price

            if (coindb < itemPrice) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let fEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`You only have ${coindb} PandaCoins, the price of ${purchase} is ${itemPrice} PandaCoins`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(fEmbed)
                })
                return
            }

            const params = {
                guildId,
                userId
            }

            inventoryModel.findOne(params, async (err, data) => {

                if (data) {

                    const hasItem = Object.keys(data.inventory).includes(purchase)
                    if (!hasItem) {
                        data.inventory[purchase] = 1
                    } else {
                        data.inventory[purchase]++
                    }
                    console.log(data)
                    await inventoryModel.findOneAndUpdate(params, data)

                } else {
                    new inventoryModel({
                        guildId,
                        userId,
                        inventory: {
                            [purchase]: 1,
                        },
                    }).save()
                }
            })
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();

                let dEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                    .setColor("GREEN")
                    .setDescription(`You have bought ${purchase}. Please type \`${prefix}use ${purchase}\` to use the product. If there is a role attached to it, you will be given the role.`)
                    .setThumbnail(`https://i.imgur.com/dUoJGTf.png`)
                message.channel.send(dEmbed)
            })
            await economy.rmvCoins(guildId, userId, itemPrice)
        }
        if (purchase === "12") {
            const purchase = "amiibo villager in boxes"

            const valid = !!items.find((val) => val.item.toLowerCase() === purchase)
            if (!valid) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let cEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`Please name a product from the shop!`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(cEmbed)
                })
                return
            }

            const itemPrice = items.find((val) => (val.item.toLowerCase()) === purchase).price

            if (coindb < itemPrice) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let fEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`You only have ${coindb} PandaCoins, the price of ${purchase} is ${itemPrice} PandaCoins`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(fEmbed)
                })
                return
            }

            const params = {
                guildId,
                userId
            }

            inventoryModel.findOne(params, async (err, data) => {

                if (data) {

                    const hasItem = Object.keys(data.inventory).includes(purchase)
                    if (!hasItem) {
                        data.inventory[purchase] = 1
                    } else {
                        data.inventory[purchase]++
                    }
                    console.log(data)
                    await inventoryModel.findOneAndUpdate(params, data)

                } else {
                    new inventoryModel({
                        guildId,
                        userId,
                        inventory: {
                            [purchase]: 1,
                        },
                    }).save()
                }
            })
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();

                let dEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                    .setColor("GREEN")
                    .setDescription(`You have bought ${purchase}. Please type \`${prefix}use ${purchase}\` to use the product. If there is a role attached to it, you will be given the role.`)
                    .setThumbnail(`https://i.imgur.com/dUoJGTf.png`)
                message.channel.send(dEmbed)
            })
            await economy.rmvCoins(guildId, userId, itemPrice)
        }
        if (purchase === "13") {
            const purchase = "40 royal crowns (12 million bells value)"

            const valid = !!items.find((val) => val.item.toLowerCase() === purchase)
            if (!valid) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let cEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`Please name a product from the shop!`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(cEmbed)
                })
                return
            }

            const itemPrice = items.find((val) => (val.item.toLowerCase()) === purchase).price

            if (coindb < itemPrice) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let fEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`You only have ${coindb} PandaCoins, the price of ${purchase} is ${itemPrice} PandaCoins`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(fEmbed)
                })
                return
            }

            const params = {
                guildId,
                userId
            }

            inventoryModel.findOne(params, async (err, data) => {

                if (data) {

                    const hasItem = Object.keys(data.inventory).includes(purchase)
                    if (!hasItem) {
                        data.inventory[purchase] = 1
                    } else {
                        data.inventory[purchase]++
                    }
                    console.log(data)
                    await inventoryModel.findOneAndUpdate(params, data)

                } else {
                    new inventoryModel({
                        guildId,
                        userId,
                        inventory: {
                            [purchase]: 1,
                        },
                    }).save()
                }
            })
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();

                let dEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                    .setColor("GREEN")
                    .setDescription(`You have bought ${purchase}. Please type \`${prefix}use ${purchase}\` to use the product. If there is a role attached to it, you will be given the role.`)
                    .setThumbnail(`https://i.imgur.com/dUoJGTf.png`)
                message.channel.send(dEmbed)
            })
            await economy.rmvCoins(guildId, userId, itemPrice)
        }
        if (purchase === "14") {
            const purchase = "non-amiibo villager in boxes"

            const valid = !!items.find((val) => val.item.toLowerCase() === purchase)
            if (!valid) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let cEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`Please name a product from the shop!`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(cEmbed)
                })
                return
            }

            const itemPrice = items.find((val) => (val.item.toLowerCase()) === purchase).price

            if (coindb < itemPrice) {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let fEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`You only have ${coindb} PandaCoins, the price of ${purchase} is ${itemPrice} PandaCoins`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(fEmbed)
                })
                return
            }

            const params = {
                guildId,
                userId
            }

            inventoryModel.findOne(params, async (err, data) => {

                if (data) {

                    const hasItem = Object.keys(data.inventory).includes(purchase)
                    if (!hasItem) {
                        data.inventory[purchase] = 1
                    } else {
                        data.inventory[purchase]++
                    }
                    console.log(data)
                    await inventoryModel.findOneAndUpdate(params, data)

                } else {
                    new inventoryModel({
                        guildId,
                        userId,
                        inventory: {
                            [purchase]: 1,
                        },
                    }).save()
                }
            })
            let url = client.users.fetch(userId);
            url.then(function (targetURL) {
                var imgURL = targetURL.displayAvatarURL();

                let dEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                    .setColor("GREEN")
                    .setDescription(`You have bought ${purchase}. Please type \`${prefix}use ${purchase}\` to use the product. If there is a role attached to it, you will be given the role.`)
                    .setThumbnail(`https://i.imgur.com/dUoJGTf.png`)
                message.channel.send(dEmbed)
            })
            await economy.rmvCoins(guildId, userId, itemPrice)
        }
    }
}
