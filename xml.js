const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;

    const embed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777215))
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .addField('How to download and use XML vehicles', 'Follow the below guide on how to download and use the vehicles')
        .addField('Download:', '[Download](https://cdn.discordapp.com/attachments/347430946028650506/349133056428474369/New_XML.rar)')
        .addField('Text Guide:', '1. Navigate to Grand Theft Auto 5-D3SK1NG-Vehicles-XML\n2. Drag all files from inside the XML_Fixed.rar file into the XML Folder \n3. Go into Grand Theft Auto 5 \n4. Open the menu and go to the Vehicles Section.\n5. Open the Spawner.\n6. Open the XML Vehicles Submenu.\n7. The XML Vehicles should be there. \n8. If they are not showing up, click on "Reload List" and they should appear.')
        .setThumbnail('');
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
    name: 'xml',
    description: 'xml info',
    usage: 'xml'
};