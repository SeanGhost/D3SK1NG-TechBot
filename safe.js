const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;

    const embed = new Discord.RichEmbed()
        .setColor(0xff0000)
        .setAuthor(`D3SK1NG Menu`, `http://i.imgur.com/aHDTHDm.png`)
        .setThumbnail('http://i.imgur.com/aHDTHDm.png')
        .addField('Stay Safe', 'First of all, please keep in mind that modding is against the rules, it\'ll never be 100% safe and there is always the risk of getting suspended.\n\n\u2022 Getting reported is a big risk for modders, try to avoid it!\n\u2022 Solo sessions do not make anything more safe! It is, in fact, a bigger risk.\n\n**The following points are guidelines of what\'s generally considered to be a risk or not:**')
        .addField('Definitely not safe:', '\u2022 Storing spawned cars in your garage.\n\u2022 Selling spawned cars.\n\u2022 Dropping money using old methods.\n\u2022 Ped cash using old methods.\n\u2022 Using old stealth 15 million.')
        .addField('Small Risk:', '\u2022 RP increaser or instant RP.\n\u2022 Max stats, snacks, fireworks and armors.\n\u2022 Unlocks.')
        .addField('Safe:', '\u2022 Dropping money using the new and safe method.\n\u2022 Teleporting.\n\u2022 Object/vehicle spawning.\n\u2022 Banking money.\n\u2022 Using ATM to transfer money (bank to wallet or vice versa).\n\u2022 Everything else that doesn\'t get you reported.\n\n*Some features might get detected soon. So use them while you can!*')
        .setFooter('If this does not answer your question, contact at #tech-support for more info.');
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
    name: 'safe',
    description: 'shows whats safe and whats not',
    usage: 'safe'
};