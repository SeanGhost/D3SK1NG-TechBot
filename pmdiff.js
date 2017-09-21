const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = async(client, message, args) => {
    if (!message.content.startsWith(settings.prefix)) return;
    try {
        let user = message.mentions.users.first();
        if (!user) return message.channel.send('Mention a user to send Difference message')
        const differencepm = new Discord.RichEmbed()
            .setColor(Math.floor(Math.random() * 16777215))
            .setAuthor(`D3SK1NG Menu`, ``)
            .setTitle('D3SK1NG Premium & VIP')
            .addField('What is the differences between VIP & Premium', 'The differences are, Better Features, Better Support')
            .addField('Is any of them safer than the other?', 'No, They are both equally safe.')
            .addField('VIP Version', 'VIP Version of the Menu has better options as compared to Premium Version which can be used to your advantages, Such as, **Insane Money(2billion every half a second)** 600k Stealth, IP feature, Troll options such as Infinite black screen, delayed non-host kick,Host kick and many more...')
            .addField('Premium Version', 'Premium Version has all the default features & would work perfectly too but just without massive trollings & greifing features.')
            .addField('Have a new & awesome feature suggestion(s) in mind?', 'Create a thread and post all of your suggestions [here](https://d3sk1ng.com/index.php?forums/update-suggestions.48/)')
            .setFooter('Alternatively, You can post your feature suggestions in our discord channel in #suggestions')
            .setThumbnail('')
        const embed = new Discord.RichEmbed()
            .setColor(Math.floor(Math.random() * 16777215))
            .setDescription(`Hey ${user}, Please check your DMs`)
            .setFooter('Message deletes in 60s');
        message.delete();
        message.guild.member(user).send({
            embed: differencepm
        });
        message.channel.send({
            embed
        }).then(m => m.delete(30000));
    } catch (e) {
        if (e.message === 'Cannot send messages to this user') {
            await message.channel.send('I cannot send the message to that user. Reason : DMs are Disabled.')
        }
    }



}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'pmdiff',
    description: 'DMs the difference of VIP and Premium menus',
    usage: 'pmdiff'
};