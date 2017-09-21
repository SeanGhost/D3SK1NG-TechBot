const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;
    const embed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random()*16777215))
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .addField('How to use Instant RP?', 'Follow the bottom guide to use Instant RP.')
        .addField('Video Guide:', 'https://youtu.be/fUYcxPzaETY')
        .addField('Text Guide:', '1. Go to Recovery>RP Methods>Instant RP>Set New Level and Status>tick it.\n2. Go to Recovery>RP Methods>RP Increaser>Status>tick it and then untick it after a few seconds.\n\nThat\'s it. Now your RP should be increased instantly to your new given level!')
		.addField('Method 2(only works if you haven\'t unlocked all):', '1. Go to Recovery>RP Methods>Instant RP>Set New Level and Status>tick it.\n2. Go to Recovery>Unlock>Then unlock something')
		.addField('Method 3:', '1. Go to Recovery>RP Methods>Instant RP>Set New Level and Status>tick it.\n2. Go play and get some rp in any way (e.g. get away from cop, finish heist)')
    message.delete();
    message.channel.send({embed});
    return;




}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'instrp',
    description: 'instrp',
    usage: 'instrp'
};