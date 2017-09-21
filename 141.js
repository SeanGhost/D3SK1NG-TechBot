const settings = require('../settings.json');
const Discord = require('discord.js')
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;

    const embed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777215))
        .setAuthor(`D3SK1NG Menu`, `http://i.imgur.com/aHDTHDm.png`)
        .addField('New Vehicles of Smuggler\'s Run 1.41 (DLC Update)', '\u2022 Alpha Z-1\n\u2022 Bombushka\n\u2022 Cyclone\n\u2022 Howard\n\u2022 Hunter\n\u2022 Microlight\n\u2022 Mogul\n\u2022 Molotok\n\u2022 Nokota\n\u2022 P-966 Lazer\n\u2022 Pyro\n\u2022 Rapid GT3\n\u2022 Retinue\n\u2022 Rogue\n\u2022 SeaBreeze\n\u2022 Starling\n\u2022 Tula\n\u2022 Vigilante\n\u2022 Visione')
        .setFooter('Go to Vehicles>Vehicle Spawner>Custom Input, then type the name of the vehicle to spawn it.')
        .setThumbnail('http://i.imgur.com/aHDTHDm.png');
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
    name: '141',
    description: 'Shows new vehicles of Smuggler\'s Run update',
    usage: '141'
};