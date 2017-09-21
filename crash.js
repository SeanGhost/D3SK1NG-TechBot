const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;

    const embed = new Discord.RichEmbed()
        .setColor(0xFF0000)
        .setAuthor(`${message.author.username}`, client.user.avatarURL)
        .setTimestamp()
        .setTitle('I crash when I load or join a online session in GTA V.')
        .setFooter(`This message will self-destruct in 5 minutes.`)
        .addField(`Important Note! `, 'Remember that [Microsoft Visual C++ 2015 Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=52685) is a must to make d3sk1ng menu work.')
        .addField(`Didn't work? `, 'Go to #tech-support and ask.')
        .setDescription(`Hey ${message.mentions.users.first()}, try this: ➜
1. Turn off your antivirus  ✓ 
2. Delete old settings.ini  ✓
3. Start GTA V as admin  ✓
4. Make sure there are no old menu files  ✓
5. Verify your GTA V game files.  ✓
6. Load into Single Player/Story Mode before loading online ✓`)
        .setThumbnail('http://i.imgur.com/aHDTHDm.png');
    message.delete()
    message.channel.send({
        embed: embed
    }).then(m => m.delete(300000));

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'crash',
    description: 'crash',
    usage: 'crash'
};