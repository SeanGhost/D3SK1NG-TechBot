const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;

    const embed = new Discord.RichEmbed()
        .setColor(0xff0000)
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setThumbnail('http://i.imgur.com/aHDTHDm.png')
        .setTitle('How to convert GTA V Steam version into Social Club version?')
        .addField('Files Required to Convert:', 'https://drive.google.com/open?id=0Bx7ZZ45el9tWYnkyWXJ3Z21FUm8')
        .addField('Instruction', '1. Go into Steam, right click Grand Theft Auto V and press "Properties". After that press "LOCAL FILES", then "BROWSE LOCAL FILES". This will open up your GTA V folder.\n\n2. Delete everything except the __.rpf__ files and the folders. \(Delete dll and exe files only\)\n\n3. Extract the rar file you have downloaded before. You will get 3 files \(GTAV.exe, GTAVLauncher.exe, PlayGTAV.exe\).\n\n4. Copy these 3 files and paste them into GTA V\'s folder.\n\n5. Now Launch game using PlayGTAV.exe. It will download a few things such as recent updates & patches. After that, you will be able to play.')
        .addField('Any Error?', '\u2022 Download the Rockstar Games Client Tool. \(Available via the [Social Club](http://socialclub.rockstargames.com) website. Click on the little gear beside your name and then click on Game Downloads)\n\n\u2022 Use the .exe you just downloaded to Repair GTA V game files.')
        .setFooter('When converting GTA V from Steam to SC, you still have to buy a SC key to play. This will not give you GTA V for free. If any problem persists, contact at #Tech-Support');
    message.delete();
    message.channel.send({embed});



}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'steam2sc',
    description: 'steam2sc',
    usage: 'steam2sc'
};