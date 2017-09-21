const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;

    message.delete()
    const embed = new Discord.RichEmbed()
        .setAuthor(`D3SK1NG Menu`, `http://i.imgur.com/aHDTHDm.png`)
        .setColor(Math.floor(Math.random() * 16777215))
        .addField('Finding Grand Theft Auto V Game Directory:', 'If you dont know where your grand theft auto v game folder is located at, follow the instructions below.')
        .addField('Steam Copy:', 'Like all Steam games, the files for your game will be stored within the SteamApps common folder. This folder is normally found in \`C\:/\Program Files \(x86\)/\Steam/\steamapps/\common/\Grand Theft Auto V\`\n\nIf you do not find a folder titled \"Grand Theft Auto V\" within that location, follow these instructions:\n\n\u2022 Pop open Steam and click Library\n\u2022 Right click on the \"Grand Theft Auto V\" item within your library and click on \"Properties\"\n\u2022 Click on the \"Local Files\" tab\n\u2022 Click on \"Browse Local Files\"\n\nSteam will then open the folder where GTA v\'s files have been stored, at this point you should note down where that is to make the mod installation process easier.')
        .addField('Rockstar Warehouse\/Disk Copy:', 'Rockstar Warehouse downloads the game onto your hard drive, you can find the location as follows:\n\n\u2022 Right click on the GTA V Launcher icon on your desktop\n\u2022 Click \"Open File Location\"\n\nIt will then open the folder where GTA v\'s files have been stored.\nFailing that, check the following location as many players have reported the game being installed here:\n\n\`C:/\Program Files/\Rockstar Games/\Grand Theft Auto V/\`\n\`C:/\Program Files \(x86\)/\Rockstar Games/\Grand Theft Auto V\`')
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
    name: 'directory',
    description: 'directory',
    usage: 'directory'
};