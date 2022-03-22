const inventoryModel = require("../../database/models/inventory")

module.exports = {
    name: "use",
    aliases: [],
    permissions: [],
    usage: ["[item]"],
    cooldown: 0,
    description: "uses an item in your inventory",

    async execute(client, message, args, Discord, profileData) {
     

        const user = message.author
        const userId = user.id
        const guildId = message.guild.id
        const thing = args.join(" ").toString()
        const use = thing.toLowerCase()
        let thumb = ["https://i.imgur.com/Kkn7A8G.png", "https://i.imgur.com/OQo1xkQ.png"]
        let pic = thumb[Math.floor(Math.random() * thumb.length)]
 

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

        const params = {
            guildId,
            userId
        }

        await inventoryModel.findOne(params, async (err, data) => {

            if (data) {
                const hasItem = Object.keys(data.inventory).includes(use)
                if (!hasItem) {
                    let url = client.users.fetch(userId);
                    url.then(function (targetURL) {
                        var imgURL = targetURL.displayAvatarURL();
                        let cEmbed = new Discord.MessageEmbed()
                            .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                            .setColor("RED")
                            .setDescription(`You do not have \`${use}\` in your inventory!`)
                            .setThumbnail(`${pic}`)
                        message.channel.send(cEmbed)
                    })
                    return
                } else {
                    data.inventory[use]--
                }
                console.log(data)
                await inventoryModel.findOneAndUpdate(params, data)

                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    const uEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("GREEN")
                        .setDescription(`You have used \`${use}\`. A modmin will be in contact when availble to arrange delivery/collection!`)
                        .setThumbnail(`https://i.imgur.com/dUoJGTf.png`)
                    message.channel.send(uEmbed)

                    const channel = client.channels.cache.get("868445550784172072")

                    const mEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("GREEN")
                        .setDescription(`${user.username} has used \`${use}\`. Can a modmin please DM them to arrange collection/delivery and react with :lock: when you DM the member and :white_check_mark: when its delivered/collected! Also please get Panda to check if item has to be removed manually.`)
                        .setThumbnail(`https://i.imgur.com/dUoJGTf.png`)
                    channel.send("<@&868450890707783681> <@&868451028255768626>")
                    channel.send(mEmbed)

                })

                if (data.inventory["100 nmt"] <= 0) {
                    await inventoryModel.findOneAndUpdate(
                        { guildId: guildId, userId: userId }, { $unset: { "inventory.100 nmt": "" } }, { upsert: true, new: true }
                    )               
                }
                if (data.inventory["5 furniture/clothing items"] <= 0) {
                    await inventoryModel.findOneAndUpdate(
                        { guildId: guildId, userId: userId }, { $unset: { "inventory.5 furniture/clothing items": "" } }, { upsert: true, new: true }
                    )               
                }
                if (data.inventory["10 furniture/clothing items"] <= 0) {
                    await inventoryModel.findOneAndUpdate(
                        { guildId: guildId, userId: userId }, { $unset: { "inventory.10 furniture/clothing items": "" } }, { upsert: true, new: true }
                    )               
                }
                if (data.inventory["20 furniture/clothing items"] <= 0) {
                    await inventoryModel.findOneAndUpdate(
                        { guildId: guildId, userId: userId }, { $unset: { "inventory.20 furniture/clothing items": "" } }, { upsert: true, new: true }
                    )               
                }
                if (data.inventory["half an inventory of materials"] <= 0) {
                    await inventoryModel.findOneAndUpdate(
                        { guildId: guildId, userId: userId }, { $unset: { "inventory.half an inventory of materials": "" } }, { upsert: true, new: true }
                    )               
                }
                if (data.inventory["inventory of materials"] <= 0) {
                    await inventoryModel.findOneAndUpdate(
                        { guildId: guildId, userId: userId }, { $unset: { "inventory.inventory of materials": "" } }, { upsert: true, new: true }
                    )               
                }
                if (data.inventory["diy set (non-seasonal)"] <= 0) {
                    await inventoryModel.findOneAndUpdate(
                        { guildId: guildId, userId: userId }, { $unset: { "inventory.diy set (non-seasonal)": "" } }, { upsert: true, new: true }
                    )               
                }
                if (data.inventory["diy set (seasonal)"] <= 0) {
                    await inventoryModel.findOneAndUpdate(
                        { guildId: guildId, userId: userId }, { $unset: { "inventory.diy set (seasonal)": "" } }, { upsert: true, new: true }
                    )               
                }
                if (data.inventory["400 nmt"] <= 0) {
                    await inventoryModel.findOneAndUpdate(
                        { guildId: guildId, userId: userId }, { $unset: { "inventory.400 nmt": "" } }, { upsert: true, new: true }
                    )               
                }
                if (data.inventory["4 million bells"] <= 0) {
                    await inventoryModel.findOneAndUpdate(
                        { guildId: guildId, userId: userId }, { $unset: { "inventory.4 million bells": "" } }, { upsert: true, new: true }
                    )               
                }
                if (data.inventory["diy set + materials"] <= 0) {
                    await inventoryModel.findOneAndUpdate(
                        { guildId: guildId, userId: userId }, { $unset: { "inventory.diy set + materials": "" } }, { upsert: true, new: true }
                    )               
                }
                if (data.inventory["amiibo villager in boxes"] <= 0) {
                    await inventoryModel.findOneAndUpdate(
                        { guildId: guildId, userId: userId }, { $unset: { "inventory.amiibo villager in boxes": "" } }, { upsert: true, new: true }
                    )               
                }
                if (data.inventory["non-amiibo villager in boxes"] <= 0) {
                    await inventoryModel.findOneAndUpdate(
                        { guildId: guildId, userId: userId }, { $unset: { "inventory.non-amiibo villager in boxes": "" } }, { upsert: true, new: true }
                    )               
                }
                if (data.inventory["40 royal crowns (12 million bells value)"] <= 0) {
                    await inventoryModel.findOneAndUpdate(
                        { guildId: guildId, userId: userId }, { $unset: { "inventory.40 royal crowns (12 million bells value)": "" } }, { upsert: true, new: true }
                    )               
                }


            } else {
                let url = client.users.fetch(userId);
                url.then(function (targetURL) {
                    var imgURL = targetURL.displayAvatarURL();
                    let cEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${user.username}#${user.discriminator}`, `${imgURL}`)
                        .setColor("RED")
                        .setDescription(`We cannot find any items in your inventory! Please check your balance and try again.`)
                        .setThumbnail(`${pic}`)
                    message.channel.send(cEmbed)
                })
                return
            }
        })

    }
}
