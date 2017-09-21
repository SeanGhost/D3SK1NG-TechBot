const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;
    const embed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777215))
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setDescription(`Rockstar Server Status | You can either see if the servers are functional or not.`)
        .addField('Please Click on __Rockstar__', `[Rockstar](https://support.rockstargames.com/hc/en-us/articles/200426246-GTA-Online-Server-Status-Latest-Updates)`)
    message.delete();
    message.channel.send({
        embed
    });

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'rrs',
    description: 'rockstar server status',
    usage: 'rrs'
};