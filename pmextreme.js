const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;

    let user = message.mentions.users.first();
    if (!user) return;
    const extremepm = new Discord.RichEmbed()
     .setColor(Math.floor(Math.random()*16777215))
		.setThumbnail('https://images-ext-1.discordapp.net/external/AiAPdZCyaVasUUWPAcZgD8kYqaXWmXZgd-N5QTmi2lE/%3Fwidth%3D100%26height%3D100/https/images-ext-1.discordapp.net/external/BRurUa3V53ZE2K1gaQjl0-Nx0a0KTzguAfDG1TE_WvM/http/i.imgur.com/aHDTHDm.png')
		.setTitle('D3SK1NG MENU')
		.addField('How to inject d3sk1ng into game using Extreme Injector', 'Follow the bottom guide to inject the menu.')
		.addField('Make sure you have [Microsoft Visual C++ 2017 Redistributable] installed', 'You can find it [Here](https://go.microsoft.com/fwlink/?LinkId=746572)!')
		.addField('Video Guide:', 'Thanks to Yung Sleeps#2047 for his video [Click Here](https://youtu.be/Y7zjZd-vxGA) ')	
		.addField('Text Guide:', '1. Download [The Latest d3sk1ng version](https://d3sk1ng.com/index.php?forums/releases.46/)\n3. Run Extreme Injector (from inside the D3sk1ng folder that you downloaded) as administrator\n4. Press "Add DLL".\n5. Choose file: "d3sk1ng.dll".\n6. Type "GTA5.exe" into the "Process Name".\n7. If you have done the above steps correctly, you should see [this](http://imgur.com/ZK5jar5.png)\n8. Next, Click on "Settings".\n9 Select "Manual Map" under "Injection Method" and select "None" under "Scrambling Options" \n10. Tick "Auto Inject" and set "Inject Delay" to 10 under "injection options" then click on "OK" \n11. If you have done the above steps correctly, you should see [this](http://imgur.com/ZuqmsVK.png) \n12. Start "GTA V".\n13. Load in Story-Mode.\n14. press numpad * or insert to open the menu')
		.setFooter('You must inject each time you want to use the menu.')
	const embed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777215))
        .setDescription(`Hey ${message.mentions.users.first()}, Instructions For Extreme injector settings have been sent to your PM!`)
        .setFooter('Message deletes in 30s');
    message.delete();
    message.guild.member(user).sendEmbed(extremepm);
    message.channel.sendEmbed(embed).then(m => m.delete(30000));
};

  }
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};
exports.help = {
    name: 'pmextreme',
    description: 'Pm\'s the user the extreme guide (use to save space if they ask in general',
    usage: 'pmextreme'
};






