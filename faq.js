const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;
    let user = message.mentions.users.first();
    if (!user) return message.channel.send('Mention a user')
    const embed = new Discord.RichEmbed()
        .setColor(0xFF0000)
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setTimestamp()
        .addField('I have registered, what should I do now?', 'Once you have registered, PM an admin and write your forums username!')
        .addField('I have private messaged a Supervisor/Admin with my forums username, now what?', 'After you have wrote your name to an admin, you must be patient until you are given your role at d3sk1ng forums. Please dont spam an admin.')
        .addField('Where do I find my license key?', ' After your account is given the role or if you want to check, go to [Click Here](https://d3sk1ng.com/index.php?account/personal-details) and generate a license key.')
        .setFooter('Your account must be given the role, or else you cannot get the license key, patience is key!')
        .setDescription(`Hey ${message.mentions.users.first()}, please go through these frequently asked questions before asking furhter questions.`)
        .setThumbnail('http://i.imgur.com/aHDTHDm.png');
    message.delete()
    message.channel.send({
        embed: embed
    }).then(m => m.delete(60000));



}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'faq',
    description: 'faq',
    usage: 'faq'
};