const settings = require('../settings.json');
exports.run = async(client, message) => {
    if(!message.content.startsWith(settings.prefix)) return;
    let args = message.content.split(' ').slice(1)
    let flag = ['logchannel', 'modlog', 'welcomeEnable', 'welcomechannel', 'welcomemessage', 'setmod', 'setadmin']
    let a = flag.indexOf(args[0]);
    let author = message.author.id;
    if(args < 1) return message.channel.send(`\`\`\`\nBasic configuration\n\n${settings.prefix}setup logchannel\n${settings.prefix}setup modlog\n${settings.prefix}setup welcomeEnable\n${settings.prefix}setup welcomechannel\n${settings.prefix}setup welcomemessage\n${settings.prefix}setup setmod\n${settings.prefix}setup setadmin\n\nSyntaxes must be exact\`\`\``)
    let chan = args.slice(1).join(' ')
    //message.channel.send(`${chan}`)
    switch(a)
    {
        case 0:
        {
            try {
                    if(!chan) return message.channel.send(`\`\`\`\n${settings.prefix}setup logchannel [logchannel name]\n\nExample : ${settings.prefix}setup logchannel logs\n\nAll Logs will be sent to this channel\`\`\``)
                    let channel = chan
                    message.channel.send(`${channel}`)
                    let nchannel = message.guild.channels.find('name', `${channel}`)
                    message.channel.send(`${nchannel.id}`)
                    if(nchannel) {
                        sql.run(`UPDATE guildSettings SET logchannel='${nchannel.id}' WHERE guildID= ${message.guild.id}`)
                        message.channel.send(`${nchannel} avaiable. Channel setup complete.`)
                    }
                   
        } catch(error) {
                message.channel.send(`setup Error | ${error}`)
            }
        }
        break;
        case 1:
        {
            try {
                if(!chan) return message.channel.send(`\`\`\`\n${settings.prefix}setup modlog [modlog name]\n\nExample : ${settings.prefix}setup modlog logs\n\nAll ModLogs will be sent to this channel\`\`\``)
                let channel = chan
                message.channel.send(`${channel}`)
                let nchannel = message.guild.channels.find('name', `${channel}`)
                message.channel.send(`${nchannel.id}`)
                if(nchannel) {
                    sql.run(`UPDATE guildSettings SET modlogs='${nchannel.id}' WHERE guildID= ${message.guild.id}`)
                    message.channel.send(`${nchannel} avaiable. Channel setup complete.`)
                } else message.channel.send(`Unknown Channel | Please recheck the channel name.`)
                } catch(error) {
                message.channel.send(`ModChannel setup Error | ${error}`)
            }
        }
        break;
        case 2: 
        {
            try {
                let greets = await sql.get(`SELECT greet FROM guildSettings WHERE guildID=${message.guild.id}`)
                if(greets.greet === 'true') {
                    sql.run(`UPDATE guildSettings SET greet='false' where guildID=${message.guild.id}`).then(() => {
                        message.channel.send('Greet Messages are **Disabled**.')
                    })
                } else if (greets.greet === 'false') {
                    sql.run(`UPDATE guildSettings SET greet='true' WHERE guildID=${message.guild.id}`).then(() => {
                        message.channel.send('Greet Messages are now **Enabled**.')
                    })
                }
            } catch(error) {
                message.channel.send(`WelcomeEnable Error | ${error}`)
            }
        }
        break;
        case 3:
        {
            try {
                if(!chan) return message.channel.send(`\`\`\`\n${settings.prefix}setup welcomechannel [channel name]\n\nExample : ${settings.prefix}setup welcomechannel welcome\n\nNew Users will be Greeted in the given channel\n\n${settings.prefix}setup welcomeEnable\n  To enable Welcome messages in the given Channel\`\`\``)
                let greetId = await sql.get(`SELECT greetChannelID FROM guildSettings WHERE guildID=${message.guild.id}`)
                let channel = chan
                let nchannel = message.guild.channels.find('name', `${channel}`)
                message.channel.send(`${nchannel}`)
                if(nchannel) {
                sql.run(`UPDATE guildSettings SET greetChannelID=${nchannel.id}`).then(() => {
                    message.channel.send(`Welcome Messages will be Directed to ${channel}`)
                })

                } else message.channel.send(`Invalid Channel name.`)
            } catch(error) {
                message.channel.send(`WelcomeChannel Error | ${error}`)
            }
        }
        case 4: 
        {
            try {
                if(!chan) return message.channel.send(`\`\`\`diff\n${settings.prefix}setup welcomemessage new\n\n   To add a new message\n\n${settings.prefix}setup welcomemessage old\n\n   To display the old greeting message.\n\n$user - Joined user\n$server - server name\n$prefix - bot prefix\`\n\`\`\``)
                if(chan === 'new') {
                    message.channel.send(`\`\`\`js\nAwaiting for a greet message. Anything you type will be saved as the Greet message within the next 60 seconds.\nReply with \`cancel\` to quit\n\nSyntaxes;\n$user - Joined members Tag\n$server - Server name\n$prefix - Bot Prefix\`\n\`\`\``)
                    let word = await message.channel.awaitMessages(m => m.author.id === author, {
                        'errors': ['time'],
                        'max': 1,
                        time: 60000
                    })
                    word = word.first();
                        if (word.content === 'cancel') return message.channel.send(`Greet Message addition Cancelled`);
                        if(word.content.length < 1) {
                            let oldmessage = await sql.get(`SELECT greetMessage FROM guildSettings WHERE guildID=${message.guild.id}`)
                            message.channel.send(`Current Greet Message is\n\n\`${oldmessage.greetMessage}\``)
                        } else {
                            let oldmessage = await sql.get(`SELECT greetMessage FROM guildSettings WHERE guildID=${message.guild.id}`)
                            sql.run(`UPDATE guildSettings SET greetMessage="${word.content.replace(/"/g, '\'')}" WHERE guildID=${message.guild.id}`).then(() => {
                                message.channel.send(`Greet Message setup Complete.`)
                            })
                        }
                }
                    if(chan === 'old') {
                    let oldmessage = await sql.get(`SELECT greetMessage FROM guildSettings WHERE guildID=${message.guild.id}`)
                    if(!oldmessage.greetMessage) {
                        message.channel.send(`No Greet Message`)
                    } else message.channel.send(`**${oldmessage.greetMessage}**`)
                    
                    }
            } catch(error) {
                message.channel.send(`WelcomeMessage Error | ${error}`)
            }
        }
        break;
        case 5:
        {
            try {
                if(!chan) return message.channel.send(`\`\`\`diff\n${settings.prefix}setup setmod MODERATOR\n\nThis will setup role MODERATOR as ModRole of the bot.\`\n\`\`\``)
                let modrole = await message.guild.roles.find('name', `${chan}`) 
                if(modrole) {
                    sql.run(`UPDATE guildSettings SET mod='${modrole.name}' WHERE guildID=${message.guild.id}`).then(() => {
                        message.channel.send(`ModRole Setup Complete : **${modrole.name}**`)
                    })    
                } else message.channel.send(`Entered Role name is Invalid`)
            } catch(error) {
                message.channel.send(`setMod Error | ${error}`)
            }
        }
        break;
        case 6:
        {
            try {
                if(!chan) return message.channel.send(`\`\`\`diff\n${settings.prefix}setup setadmin ADMIN\n\nThis will setup role ADMIN as AdminRole of the bot.\`\n\`\`\``)
                let adminrole = await message.guild.roles.find('name', `${chan}`)
                if(adminrole) {
                    sql.run(`UPDATE guildSettings SET admin='${adminrole.name}' WHERE guildID=${message.guild.id}`)
                    message.channel.send(`AdminRole Setup Complete : **${adminrole.name}**`)
                } else message.channel.send(`Entered Role name is invalid`)
            } catch(error) {
                message.channel.send(`setAdmin Error | ${error}`)
            }
        }
    }
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ss"],
  permLevel: 10
};

exports.help = {
  name: 'setup',
  description: 'setup channels',
  usage: 'setup <module>'
};
