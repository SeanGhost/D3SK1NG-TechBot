const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if(!message.content.startsWith(settings.prefix)) return;
  let command;
  if (client.commands.has(params[0])) {
    command = params[0];
  } else if (client.aliases.has(params[0])) {
    command = client.aliases.get(params[0]);
  }
  if (!command) {
    return message.channel.send(`I cannot find the command: **${params[0]}**`);
  } else {
    message.channel.send(`Reloading: **${command}**`)
    .then(m => {
      client.reload(command)
      .then(() => {
        m.channel.send(`Successfully reloaded: **${command}**`);
      })
      .catch(e => {
        m.channel.send(`Command reload failed: **${command}**\n\`\`\`${e.stack}\`\`\``);
      });
    });
  }
};

exports.conf = {
  aliases: ['r', 'rld', 'refresh'],
  permLevel: 10
};

exports.help = {
  name: 'reload',
  description: 'Reloads the command file, if it\'s been updated or modified.',
  usage: 'reload <commandname>',
  category:'System'
};
