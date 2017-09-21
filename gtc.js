const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;
    let user = message.mentions.users.first();
    if(!user) return message.channel.send('Mention a user')
    message.delete()
    const embed = new Discord.RichEmbed()
        .setAuthor(`D3SK1NG Menu`, `http://i.imgur.com/aHDTHDm.png`)
        .setColor(Math.floor(Math.random() * 16777215))
        .setThumbnail('')
        .addField(`Hello ${user.username},`, 'We are more than willing to help you but it would be great if you told us your problem in #tech-support.')
        .setFooter('Messages deletes in 60s')
    message.channel.send({embed}).then(m => m.delete(600000));



}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'gtc',
    description: 'go to techsupport',
    usage: 'gtc'
};