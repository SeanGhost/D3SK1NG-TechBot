const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;

    message.delete()
    const embed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777215))
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .addField('Need your Discord role?', 'To obtain your Discord role you must have proof of purchase (ex.Paypal Transaction or Admin Conversations), without proof of purchase, Admins/Supervisors cannot give you your role.')
        .addField('Need your Forums role?', 'To obtain your Forum role you must have proof of purchase (ex.Paypal Transaction & Admin Conversations), if you wish to have your forum role PM Supervisor with your Forum Name and Role')
        .setFooter('Please tell a staff member if you have more questions.')
    message.channel.send({embed})



}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'roles',
    description: 'roles',
    usage: 'roles'
};