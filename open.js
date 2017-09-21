const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;

    const embed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777215))
        .setAuthor(`D3SK1NG Menu`, `http://i.imgur.com/aHDTHDm.png`)
        .addField('Issue: There is a box on my screen and it won\'t go.', 'That\'s where you have to log in with your license code.')
        .addField('Username:', '\`\`\`Type your license code here.\`\`\`\nNow press enter and it should say welcome in the bottom right.')
        .addField('To open the menu:', '\u2022 Turn Numlock ON, press Numpad * or \[INSERT\] Key\n\u2022 For controller: DPad Right\+ X\/Square')
        .setThumbnail('http://i.imgur.com/aHDTHDm.png')
        .setFooter('Still not logged in or menu won\'t open? Contact ask our staff team at #tech-support');
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
    name: 'open',
    description: 'shows how to open d3sk1ng menu',
    usage: 'open'
};