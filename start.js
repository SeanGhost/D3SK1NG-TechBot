const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;


    const embed = new Discord.RichEmbed()

        .setColor(Math.floor(Math.random() * 16777215))
        .setAuthor('D3SK1NG MENU', 'http://i.imgur.com/aHDTHDm.png')
        .setTitle('I just bought the menu, what do I do know?')
        .addField('Download', 'Thank you for purchasing either the D3SK1NG Premium/VIP versions, now that you have purchased you can sign in and download the menu [here](https://www.d3sk1ng.com/index.php?forums/releases.46/). Remember to always download the latest version as it was recently updated and safer!')
        .addField('Extraction and Installation', 'First what you must do is extract the .zip file to get the contents of the folder. Next to install into game you must use either the injector that cam with the menu or [extreme](https://d3sk1ng.com/index.php?threads/extreme-injector.454/)/[xenos](https://d3sk1ng.com/index.php?threads/xenos-injector.1091/). Remember to read the read me file for injection.')
        .addField('Verification', 'Now that you have loaded in game you must type in a license key which you can find [Here](https://www.d3sk1ng.com/index.php?account/personal-details) and type it into the black box')
        .setFooter('If you have any other question do ask a staff member or #tech-support. We hope you enjoy the menu!')
        .setThumbnail('http://i.imgur.com/aHDTHDm.png')
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
    name: 'start',
    description: 'Tells you what to do after payment',
    usage: 'start'
};