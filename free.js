const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;

    message.delete()
    const embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setDescription('Currently there is no Free/Lite version of the menu. Our old free menu got detected, we do not recommend using it online. If you use the free menu online you will get banned.')        .setColor(Math.floor(Math.random() * 16777215))
        .setThumbnail('http://i.imgur.com/aHDTHDm.png')

    message.channel.send({embed})

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'free',
    description: 'no free menu',
    usage: 'free'
};