const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;
    let rao = message.guild.member(message.mentions.users.first())
    if(message.author.id !== '276385052110225419' && message.author.id !== '199570626724233216') return;
    message.delete()
    message.channel.send(`${rao}`)
    message.channel.send(`${rao}`)
    message.channel.send({
        embed: {
            description: 'Razer gimme dragonlore k thx',
            color: Math.floor(Math.random()*16777215),
        }
    })
    message.channel.send(`${rao}`)
    message.channel.send(`${rao}`)
    message.delete()
    message.channel.send({
        embed: embed
    }).then(m => m.delete(300000));

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3
};

exports.help = {
    name: 'razer',
    description: 'crash',
    usage: 'crash'
};