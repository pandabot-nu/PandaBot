const profileModel = require(`../../database/models/profileSchema`)

module.exports = async (Discord, client, member) => {

    const channel = member.guild.channels.cache.find(channel => channel.name === "reception");

    if (!channel) return;

    const welcomeEmbed = new Discord.MessageEmbed()
        .setColor('#FF0099')
        .setTitle('Welcome to Nook University!')
        .setDescription(`Hi there ${member}! \n` +
            `Welcome to ${member.guild.name} - a great 25+ server where we relax and have fun! \n` +
            `Can you please tell us your age, and a modmin will be around shortly to welcome you and provide access to the rest of the server! <:a:isawave:783091772217098311>`)
        .setThumbnail('https://media.discordapp.net/attachments/798082988230967307/811266489108660274/ACbanner2.jpg')

    channel.send(welcomeEmbed);

    let profile = await profileModel.create({
        userID: member.id,
        userName: member.name,
        serverID: member.guild.id,
        coins: 1000,
        bank: 0,
    });
    profile.save();
}