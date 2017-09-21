const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;
    const embed = new Discord.RichEmbed()
        .setColor(0xff0000)
        .setAuthor(`D3SK1NG Menu`, `http://i.imgur.com/aHDTHDm.png`)
        .setThumbnail('http://i.imgur.com/aHDTHDm.png')
        .setTitle('How to convert GTA V Social Club version into Steam version?')
        .addField('Files Required to Convert:', 'https://drive.google.com/open?id=0Bx7ZZ45el9tWZzZlckFmbWhMc0E')
        .addField('Instruction', '1. Right click on your GTA V shortcut, click on Open File Location. I assume this will be Program Files, under Rockstar Games or Grand Theft Auto V.\n\n2. Delete everything except the __.rpf__ files and the folders. \(Delete dll and exe files only\)\n\n3. Then extract that rar file you have downloaded before. You will get 4 files. (GTAV.exe, GTAVLauncher.exe, installscript.vdf, steam_api64.dll) copy these 4 files and paste them into GTA V folder.\n\n4. Select Grand Theft Auto V in your Steam directory and begin to install it. Remember the location where you are installing in. Then stop this installation after a few seconds.\n\n5. Copy all your game files and paste them into the folder where you were installing GTA V.\n\n6. Resume installation. It shouldn\'t download anything big, but it may download a few more files of latest updates and patches.')
        .addField('Any Error?', '\u2022 Right click Grand Theft Auto V in your Steam games list, click Properties, click Local Files and then click Verify Integrity of Game Cache.\n\n\u2022 Wait for it to verify and download whatever it needs to replace. \(This could take a while\)')
        .setFooter('When converting GTA V from SC to Steam, you still have to buy a Steam key to play. This will not give you GTA V for free. If any problem persists, contact at #Tech-Support');
    message.delete();
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
    name: 'sc2steam',
    description: 'shows how to convert from SC to Steam version',
    usage: 'sc2steam'
};