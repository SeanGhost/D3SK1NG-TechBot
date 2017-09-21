const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;

    const embed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777215))
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .addField('How to use RP Increaser?', '1. Teleport yourself in any interior (not your apartment). e.g Teleport>Interiors>Lester\'s House Inside.\n2. Increase Delay to 50+ (it doesn\'t work for me below 17)\n3. Stars: 5 or Random Stars\n4. Now enable RP Increaser and it should work.\n5. Still not working? Change session or restart gta v and try again.')
        .setFooter('Ensure that you have your Never Wanted disabled. Else, it will not work')
        .setThumbnail('http://i.imgur.com/aHDTHDm.png');
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
    name: 'rp',
    description: 'shows how to use instant RP method',
    usage: 'rp'
};