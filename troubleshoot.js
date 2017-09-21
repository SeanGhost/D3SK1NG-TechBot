const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;
    message.delete()
    const embed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777215))
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .addField('Troubleshooting Guide:', '\n• Run GTA V as admin\n• Run GTA V in Windowed Borderless• Make sure to have Microsoft Visual C++ 2015 Redistributable x64 and x84\n• Lower DirectX from 11 to 10.1 or 10.1 to 10\n• Go in Story Mode then Online\n• Enable VSYNC and set it to half\n• Delete old menu files\n• Delete the old d3sk1ng folder\n• Make sure there arent random files in your directory.\n• Disable your AntiVirus (Enable when not ingame)\n• If you are asked for a license key each time, goto settings.ini and copy and paste it there. \n• Turn off auto inject, use manual map, and inject right when opening the game')
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
    name: 'troubleshoot',
    description: 'troubleshooting',
    usage: 'troubleshoot'
};