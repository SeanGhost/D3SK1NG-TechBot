const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {

        if (!message.content.startsWith(settings.prefix)) return;
        const embed = new Discord.RichEmbed()
            .setColor(Math.floor(Math.random() * 16777215))
            .setAuthor(`D3SK1NG Menu`, `http://i.imgur.com/aHDTHDm.png`)
            .setThumbnail('http://i.imgur.com/aHDTHDm.png')
            .addField('Auth Is Down', 'The auth is down. You can play but the menu will not be opened, you will get a message when the menu is not available on the bottom left of your game. __Do not ask if the auth is down!__')
            .setFooter('Our support team is working to fix it. So please calm down & dont spam.')
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
name: 'authdown',
description: 'authdown',
usage: 'authdown'
};