const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;
    const embed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random()*16777215))
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .addField('How to use stealth mode?', 'The stealth mode is not like the old stealth, to make it work you have to actually trigger a transaction. How? Sell a car, pick up some money from a ped etc.')
        .addField('Easiest Way (Do both at the same time):', '1. Go to Recovery>Stealth Mode>tick it.\n2. Go to Recovery>Stealth Mode>Self Ped Drop>Tick it.\n\nThat\'s it. Now you will get 600k (VIP) or 400k (premium) for per transaction!')
        .addField('Video Guide:', 'https://www.youtube.com/watch?v=zkBRIflN-Do')
		.addField('Now, VIP users can use Insane Money, 2Billion every half a second', 'Go to Recovery>Stealth Mode>Insane Money then follow step 2.')
        .setThumbnail('')
        .setFooter('');
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
    name: 'stealth',
    description: 'shows how to use stealth mode',
    usage: 'stealth'
};