const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;
    let user = message.mentions.users.first()
    let guild = message.guild
    message.delete();
    if(!user) return message.channel.send('Mention a user')
    const notauthed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setColor(0xff0000)
        .setFooter('This message will be deleted in 90 seconds.')
        .setTimestamp()
        .addField(`How do I generate a license key?`, 'to generate a license key, head to https://d3sk1ng.com, click login using Discord, afterwards head to https://d3sk1ng.com/index.php?account/personal-details, click on generate new license key, you will be redirected to a new page, go back to the previous page and refresh, and there will be a slot with your license key in it')
        //.setDescription(`Hello there ${user}\n\nPlease read #announcements.`)
        .addField(`**USER** : ${user.username}`, ` **TYPE** : **Not Authed**`)

    const premium = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setColor(0xff0000)
        .setFooter('This message will be deleted in 90 seconds.')
        .setTimestamp()
        .addField(`How do I generate a license key?`, 'to generate a license key, head to https://d3sk1ng.com, click login using Discord, afterwards head to https://d3sk1ng.com/index.php?account/personal-details, click on generate new license key, you will be redirected to a new page, go back to the previous page and refresh, and there will be a slot with your license key in it')
        //.setDescription(`Hello there ${user}\n\nPlease read #announcements.`)
        .addField(`**USER** : ${user.username}`, `**TYPE** : **PREMIUM**`)

    const vip = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setColor(0xff0000)
        .setFooter('This message will be deleted in 90 seconds.')
        .setTimestamp()
        .addField(`How do I generate a license key?`, 'to generate a license key, head to https://d3sk1ng.com, click login using Discord, afterwards head to https://d3sk1ng.com/index.php?account/personal-details, click on generate new license key, you will be redirected to a new page, go back to the previous page and refresh, and there will be a slot with your license key in it')
        //.setDescription(`Hello there ${user}\n\nPlease read #announcements.`)
        .addField(`**USER** : ${user.username}`, `**TYPE** : **VIP**`)

    const bundle = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setColor(0xff0000)
        .setFooter('This message will be deleted in 90 seconds.')
        .setTimestamp()
        .addField(`How do I generate a license key?`, 'to generate a license key, head to https://d3sk1ng.com, click login using Discord, afterwards head to https://d3sk1ng.com/index.php?account/personal-details, click on generate new license key, you will be redirected to a new page, go back to the previous page and refresh, and there will be a slot with your license key in it')
        //.setDescription(`Hello there ${user}\n\nPlease read #announcements.`)
        .addField(`**USER** : ${user.username}`, `**TYPE** : **Bundle**`)

    if (guild.member(user).roles.find('name', 'VIP') && guild.member(user).roles.find('name', 'Premium')) {
        message.channel.send({
            embed: bundle
        })
    } else if (guild.member(user).roles.find('name', 'Premium')) {
        message.channel.send({
            embed: premium
        })
    } else if (guild.member(user).roles.find('name', 'VIP')) {
        message.channel.send({
            embed: vip
        })
    } else message.channel.send({
        embed: notauthed
    }).then(m => m.delete(90000))



}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'lks',
    description: 'license key',
    usage: 'lks'
};