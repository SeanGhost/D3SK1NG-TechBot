const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;
    
    const embed = new Discord.RichEmbed()
        .setColor(0xFF0000)
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setDescription('Details on menu prices')
        .setTitle('D3SK1NG Premium & VIP')
        .addField('Payment via __**PayPal**__', '**Premium** : $15\n**Upgrade** : $10\n**VIP**: $22.50\n\n\nOnce paid, you will be given your rank\n\n\n\nYou **Must** have **Premium** purchased to be able\nto upgrade to **VIP**', true)
        .addField('If you dont have __PayPal__', '__Steam Cards__ :\n\n**VIP** : $25 / €20\n**Premium** : $15 / €15\n**Upgrade** : $10 / €10\n\n__BTC__ :\n\n**VIP** : $25\n**Premium** : $15\n**Upgrade** : $10', true)
		.addField('How to purchase', '[Click Here](https://d3sk1ng.com/index.php?account/upgrades)')
        .addField('How to get discord roles', 'PM a Supervisor or Admin with proof of the payment to get your discord roles.')
        .setFooter('Please DM an Admin to buy via SteamCards or BTC')
		.setThumbnail('')
		 message.delete();
         message.channel.send({embed});
      return;
       
  };




exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'buy',
    description: 'Prices',
    usage: 'buy'
};