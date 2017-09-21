const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;
    const embed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777215))
        .setAuthor(`D3SK1NG Menu`, `http://i.imgur.com/aHDTHDm.png`)
        .setThumbnail('http://i.imgur.com/aHDTHDm.png')
        .setTitle('How to fix MSCVP140.dll error.')
        .addField('Files required:', 'https://www.microsoft.com/en-us/download/confirmation.aspx?id=52685')
        .addField('Instructions', 'Open the exe file downloaded and follow the installation guide provided.')
        .setFooter('Ask #tech-support for more support.');
    message.delete();
    message.channel.send({embed});



}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'mscp',
    description: 'MSCVP.dll error fix',
    usage: 'mscp'
};