const items = require("../../utils/shopitems")
const pagination = require('discord.js-pagination');

module.exports = {
    name: "shop",
    aliases: [],
    permissions: [],
    usage: ["[item]"],
    cooldown: 0,
    description: "views shop inventory",

    async execute(client, message, args, Discord, profileData) {
      
    
        const pg1 = new Discord.MessageEmbed()
        .setColor("49fafc")
        .setTitle("PandaBot Shop!")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription("Buy an item using `+buy [item name]`!")
        .addField("1            <a:pandacoin:868293179110203412>5,000 • 5 furniture/clothing items","Hunting for something to wear/decorate/redecorate? We've got you covered!\n> • available stock: unlimited")
        .addField("2            <a:pandacoin:868293179110203412>9,500 • 10 furniture/clothing items","Hunting for something to wear/decorate/redecorate? We've got you covered!\n> • available stock: unlimited")
        .addField("3            <a:pandacoin:868293179110203412>19,000 • 20 furniture/clothing items","Hunting for something to wear/decorate/redecorate? We've got you covered!\n> • available stock: unlimited")
        .addField("4            <a:pandacoin:868293179110203412>30,000 • 100 NMT", "100 Nook Mile Tickets for your dreamie hunt!\n> • available stock: unlimited")
        .setTimestamp()
        .setImage("https://i.imgur.com/pXoZUoD.jpg")


    const pg2 = new Discord.MessageEmbed()
        .setColor('49fafc')
        .setTitle("PandaBot Shop!")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription("Buy an item using `+buy [item name]`!")
        .addField("5            <a:pandacoin:868293179110203412>40,000 • Half an inventory of materials","Need some materials? Let us know which ones!\n> • available stock: unlimited")
        .addField("6            <a:pandacoin:868293179110203412>50,000 • DIY set (non-seasonal)","Any normal DIY set of your choice, we got you!\n> • available stock: unlimited")
        .addField("7            <a:pandacoin:868293179110203412>70,000 • Inventory of materials","Need some materials? Let us know which ones!\n> • available stock: unlimited")
        .addField("8            <a:pandacoin:868293179110203412>80,000 • DIY set (seasonal)","Any seasonal DIY set of your choice, we got you!\n> • available stock: unlimited")
        .setTimestamp()
        .setImage("https://i.imgur.com/pXoZUoD.jpg")

    const pg3 = new Discord.MessageEmbed()
        .setColor('49fafc')
        .setTitle("PandaBot Shop!")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription("Buy an item using `+buy [item name]`!")
        .addField("9         <a:pandacoin:868293179110203412>90,000 • 400 NMT","400 Nook Mile Tickets for your dreamie hunt!\n> • available stock: unlimited")
        .addField("10        <a:pandacoin:868293179110203412>120,000 • 4 million bells","Time to become a bell-ionaire!\n> • available stock: unlimited")
        .addField("11        <a:pandacoin:868293179110203412>130,000 • DIY set + Materials","Any DIY set of your choice, we got you! Need the mats too? Look no further, we can deliver those too!\n> • available stock: unlimited")
        .addField("12        <a:pandacoin:868293179110203412>200,000 • Amiibo villager in boxes","Tell us your Amiibo Dreamie and we will get them in boxes for you!\n> • available stock: unlimited")
        .setTimestamp()
        .setImage("https://i.imgur.com/pXoZUoD.jpg")

    const pg4 = new Discord.MessageEmbed()
        .setColor('49fafc')
        .setTitle("PandaBot Shop!")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription("Buy an item using `+buy [item name]`!")
        .addField("13        <a:pandacoin:868293179110203412>300,000 • 40 Royal Crowns (12 million bells value)","You're royalty now, love! Deck out your villagers or get those bells.\n> • available stock: unlimited")
        .addField("14        <a:pandacoin:868293179110203412>400,000 • Non-Amiibo villager in boxes","Tell us your non-Amiibo Dreamie and we will get them in boxes for you!\n> • available stock: unlimited")
    //     .addField("15        <a:pandacoin:868293179110203412> • ")
    //     .addField("16        <a:pandacoin:868293179110203412> • ")
        .setTimestamp()
        .setImage("https://i.imgur.com/pXoZUoD.jpg")

        const pages = [
            pg1,
            pg2,
            pg3,
            pg4
        ]
        const emojiList = ['⏪', '⏩'];

        const timeout = '1000000';  // Milli seconds
        pagination(message, pages, emojiList, timeout);
    }
}
