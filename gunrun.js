const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;

    const embed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777215))
        .setAuthor(`D3SK1NG Menu`, `http://i.imgur.com/aHDTHDm.png`)
        .addField('New Vehicles of Gunrunning 1.40 (DLC Update)', '\u2022 apc\n\u2022 ardent\n\u2022 caddy3\n\u2022 cheetah2\n\u2022 dune3\n\u2022 halftrack\n\u2022 hauler2\n\u2022 insurgent3\n\u2022 nightshark\n\u2022 oppressor\n\u2022 phantom3\n\u2022 tampa3\n\u2022 technical3\n\u2022 torero\n\u2022 trailerlarge\n\u2022 trailers4\n\u2022 trailersmall2\n\u2022 vagner\n\u2022 xa21')
        .setFooter('Note: Go to Vehicles>Vehicle Spawner>Spawn Vehicle By Name & type one of those vehicle\'s name to spawn it.')
        .setThumbnail('http://i.imgur.com/aHDTHDm.png');
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
    name: 'gunrun',
    description: 'shows new vehicles of gunrunning update',
    usage: 'gunrun'
};