const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;

    const embed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777215))
        .setAuthor(`D3SK1NG Menu`, `http://i.imgur.com/aHDTHDm.png`)
        .addField('How To Use R\* Dev Mode?', 'For those of you that don\'t know what Rockstar Dev is:\n\u2022 It gives you a few \"Rockstar Dev\" only tshirt, you can buy those and they will stay.\n\u2022 It gives you a spectator mode, which you can use to record cool gameplay and specate & troll other players.')
        .addField('Video Guide:', 'https://youtu.be/jd_S2sueJJM')
        .addField('Text Guide', '1. Go to Misc>Rockstar Dev Mode>tick it.\n2. Click ESC on ur keyboard. Then go to Online>Play GTA Online>At the clienttom, there will be an invisible option, click that. Then, you must accept the alert message.\n3. Once it\'s done, you\'ll be in Freecam and in a Solo Public Session.\n4. To join in a public session with other people, you must find a new session.\n5. Once it\'s done, you can open the menu. You\'ll be in spectator mode, in a public session and will be able to troll other players.')
        .addField('Hotkey:', '\`V\` - Switch views\n\`E\` - Close down the player list and then the map\n\`A\` - Extended map\n\`CTRL\` - Go from regular freecam mode to spectator mode or vice versa\n\`Caps\` - Show SC Profile of the player\n\`Arrow Keys (Up & Down)\` - Up & Down in the Player List\n\`Arrow Keys (Right & Left)\` - Switch between the available filters\n\`Backspace\` - Exit Spectator Mode\n\`Left Click\` - Enter')
        .setFooter('If you enable dev mode and go into spectate mode, you have to restart your game to get out of it.')
        .setThumbnail(`http://i.imgur.com/aHDTHDm.png`);
    message.delete();
    message.channel.send({embed});
    return;


}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'devmode',
    description: 'devmode',
    usage: 'devmode'
};