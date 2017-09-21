const settings = require('../settings.json');
exports.run = function(client, message, args) {
    if(!message.content.startsWith(settings.prefix)) return;
    let rao = message.guild.member(message.mentions.users.first())
    if(message.author.id !== '199570626724233216' && message.author.id !== '318228051651461121') return;
    message.delete()
    message.channel.send(`${rao}`)
    message.channel.send({
        embed: {
            description: 'Rao gimme knife k thx',
            color: Math.floor(Math.random()*16777215),
        }
    })
    message.channel.send(`${rao}`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'rao',
  description: 'RAO',
  usage: 'RAO'
};
