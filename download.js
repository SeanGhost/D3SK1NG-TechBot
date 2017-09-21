const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;
    message.delete();
    const embed = new Discord.RichEmbed()
    .setTitle('D3SK1NG MENU')
    .addField('To Download', '[ClickMe](https://d3sk1ng.com/index.php?forums/releases.46/)')
    .addField('Notice', 'You should be authed to download, check if you have ( VIP or PREMIUM ) tags on forums.')
    .setColor(0xff0000)
    message.channel.send({embed})


}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'download',
    description: 'download',
    usage: 'download'
};